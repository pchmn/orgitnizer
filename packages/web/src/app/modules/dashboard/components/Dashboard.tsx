import { useAuth } from '@lib/core';

export function Dashboard() {
  const { currentUser } = useAuth();

  return <>Hello {currentUser?.name}</>;
}
