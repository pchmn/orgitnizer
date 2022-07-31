import { PrivateRoute } from '@app/core/auth';
import { DefaultGenerics, Navigate, Route } from '@tanstack/react-location';
import { MyRepositories, MyStars } from './modules/repositories';
import { DashboardPage } from './pages/DashboardPage';

const dashboardRoutes: Route<DefaultGenerics> = {
  path: 'dashboard',
  element: (
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  ),
  children: [
    { path: 'stars', element: <MyStars /> },
    { path: 'repositories', element: <MyRepositories /> },
    { element: <Navigate to="/dashboard/stars" /> }
  ]
};

export default dashboardRoutes;
