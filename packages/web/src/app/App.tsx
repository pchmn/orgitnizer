import { useIsAuthenticated } from '@app/core/auth';
import dashboardRoutes from '@app/modules/dashboard';
import signInRoutes from '@app/modules/signIn';
import { useAuth } from '@lib/core';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';
import { useEffect } from 'react';
import './App.css';

const location = new ReactLocation();

function App() {
  const { currentUser } = useAuth();
  const [, setIsAuthenticated] = useIsAuthenticated();

  useEffect(() => {
    if (currentUser !== undefined) {
      setIsAuthenticated(currentUser !== null);
    }
  }, [currentUser, setIsAuthenticated]);

  return (
    <Router
      location={location}
      key={location.current.pathname}
      routes={[dashboardRoutes, signInRoutes, { element: <Navigate to="/dashboard" /> }]}
    />
  );
}

export default App;
