import {
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  OAuthCredential,
  onAuthStateChanged,
  signInWithRedirect,
  signOut as firebaseSignOut,
  Unsubscribe,
  updateProfile,
  User
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Options } from '../models/options.model';

const provider = new GithubAuthProvider().addScope('read:user,gist');

export function useFirebaseAuth(options: Options = { listen: true }) {
  const unsubscribe = useRef<Unsubscribe>();
  const queryClient = useQueryClient();
  const auth = useMemo(() => getAuth(), []);

  useEffect(() => {
    return () => unsubscribe.current?.();
  }, []);

  const { data, isLoading, isFetching, error } = useQuery<User | null, Error>(
    'firebaseAuth',
    async () => {
      if (options.listen) {
        let resolved = false;

        return new Promise<User | null>((resolve, reject) => {
          unsubscribe.current = onAuthStateChanged(
            auth,
            (firebaseUser) => {
              if (!resolved) {
                resolved = true;
                return resolve(firebaseUser);
              }
              queryClient.setQueryData<User | null>('firebaseAuth', firebaseUser);
            },
            reject
          );
        });
      }

      return auth.currentUser;
    },
    { staleTime: options.listen ? Infinity : 0 }
  );

  const signIn: () => Promise<void> = useCallback(() => signInWithRedirect(auth, provider), [auth]);

  const signOut: () => Promise<void> = useCallback(() => firebaseSignOut(auth), [auth]);

  const getGithuRedirectResult: () => Promise<{ user: User; credential: OAuthCredential | null } | null> =
    useCallback(async () => {
      const result = await getRedirectResult(auth);
      if (!result) {
        return null;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await updateProfile(result.user, { displayName: (result.user as any).reloadUserInfo?.screenName });
      const credential = GithubAuthProvider.credentialFromResult(result);
      // Save accessToken for future use
      await setDoc(doc(getFirestore(), `users/${result.user.uid}`), { accessToken: credential?.accessToken });
      // Update query data
      queryClient.setQueryData<User | null>('firebaseAuth', result.user);
      return { user: result.user, credential };
    }, [auth, queryClient]);

  return {
    currentUser: data,
    isLoading: isLoading || isFetching,
    error,
    signIn,
    signOut,
    getGithuRedirectResult
  };
}
