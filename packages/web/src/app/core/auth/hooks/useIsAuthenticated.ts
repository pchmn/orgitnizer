import { useStorage } from '@lib/core';

export function useIsAuthenticated() {
  return useStorage({ key: 'isAuthenticated', defaultValue: false });
}
