import { Navigate } from '@tanstack/react-location';
import { PropsWithChildren } from 'react';
import { useIsAuthenticated } from '../hooks/useIsAuthenticated';

export function PrivateRoute({ children }: PropsWithChildren<unknown>) {
  const [isAuthenticated] = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
}
