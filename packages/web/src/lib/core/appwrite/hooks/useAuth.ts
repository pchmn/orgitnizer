import { callFunction } from '@lib/core';
import { MakeGenerics } from '@tanstack/react-location';
import { Models } from 'appwrite';
import { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { appwrite } from '../initSdk';
import { UserPrefs } from '../models/userPrefs.model';

export type SignInGenerics = MakeGenerics<{
  Search: {
    redirectResult: 'success' | 'failure';
  };
}>;

export function useAuth() {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, error } = useQuery<Models.User<UserPrefs> | null, Error>(
    'auth/user',
    async () => {
      try {
        const account = await appwrite.account.get<UserPrefs>();
        return account;
      } catch (err) {
        return null;
      }
    },
    { staleTime: Infinity }
  );

  const signIn = useCallback(
    () =>
      appwrite.account.createOAuth2Session(
        'github',
        `${import.meta.env.PROD ? 'https://orgitz.app' : 'http://localhost:3000'}/signin?redirectResult=success`,
        `${import.meta.env.PROD ? 'https://orgitz.app' : 'http://localhost:3000'}/signin?redirectResult=failure`,
        ['read:user']
      ),
    []
  );

  const handleSignin = useCallback(
    async (redirectResult: 'success' | 'failure') => {
      if (redirectResult === 'success') {
        const account = await appwrite.account.get<UserPrefs>();
        queryClient.setQueryData('auth/user', account);
        if (!account.name || !account.prefs.avatarUrl) {
          queryClient.setQueryData(
            'auth/user',
            await callFunction<Models.User<Models.Preferences>>('updateAccountProfile')
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
