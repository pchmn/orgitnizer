import { PrivateRoute } from '@app/core/auth';
import { DefaultGenerics, Route } from '@tanstack/react-location';
import { DashboardPage } from './pages/DashboardPage';

const dashboardRoutes: Route<DefaultGenerics> = {
  path: 'dashboard',
  element: (
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  )
};

export default dashboardRoutes;
