import dashboardRoutes from '@app/modules/dashboard';
import signInRoutes from '@app/modules/signIn';
import { useAuth } from '@lib/core';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';
import { useEffect } from 'react';
import './App.css';
import { useIsAuthenticated } from './core/auth';

const location = new ReactLocation();

function App() {
  const { currentUser } = useAuth();
  const [, setIsAuthenticated] = useIsAuthenticated();

  useEffect(() => {
    console.log('useEffect currentUser', currentUser);
    if (currentUser !== undefined) {
      setIsAuthenticated(currentUser !== null);
    }
  }, [currentUser, setIsAuthenticated]);

  return (
    <Router
      basepath="/orgitz"
      location={location}
      key={location.current.pathname}
      routes={[dashboardRoutes, signInRoutes, { element: <Navigate to="/dashboard" /> }]}
    />
  );
}

export default App;
