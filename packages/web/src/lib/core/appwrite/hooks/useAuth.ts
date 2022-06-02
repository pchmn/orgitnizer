import { callFunction } from '@lib/core';
import { MakeGenerics } from '@tanstack/react-location';
import { Models } from 'appwrite';
import { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { appwrite } from '../initSdk';

export type SignInGenerics = MakeGenerics<{
  Search: {
    redirectResult: 'success' | 'failure';
  };
}>;

export function useAuth() {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, error } = useQuery<Models.User<Models.Preferences> | null, Error>(
    'auth/user',
    async () => {
      try {
        const account = await appwrite.account.get();
        return account;
      } catch (err) {
        return null;
      }
    },
    { staleTime: Infinity }
  );

  const signIn = () =>
    appwrite.account.createOAuth2Session(
      'github',
      'http://localhost:3000/orgitz/signin?redirectResult=success',
      'http://localhost:3000/orgitz/signin?redirectResult=failure',
      ['read:user']
    );

  const handleSignin = useCallback(
    async (redirectResult: 'success' | 'failure') => {
      if (redirectResult === 'success') {
        const account = await appwrite.account.get();
        queryClient.setQueryData('auth/user', account);
        await callFunction<Models.User<Models.Preferences>>('set-github-username');
        if (!account.name) {
          queryClient.setQueryData(
            'auth/user',
            await callFunction<Models.User<Models.Preferences>>('set-github-username')
          );
        }
      } else {
        queryClient.setQueryData('auth/user', null);
      }
    },
    [queryClient]
  );

  const signOut = async () => {
    await appwrite.account.deleteSessions();
    queryClient.setQueryData('auth/user', null);
  };

  return {
    currentUser: data,
    isLoading: isLoading || isFetching,
    error,
    signIn,
    signOut,
    handleSignin
  };
}
