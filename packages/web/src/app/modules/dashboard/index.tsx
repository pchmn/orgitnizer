import { DefaultGenerics, Route } from '@tanstack/react-location';
import React from 'react';
import { DashboardPage } from './pages/DashboardPage';

const dashboardRoutes: Route<DefaultGenerics> = {
  path: 'dashboard',
  element: <DashboardPage />
};

export default dashboardRoutes;
