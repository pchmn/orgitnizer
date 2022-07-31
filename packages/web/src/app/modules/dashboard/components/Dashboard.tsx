import { Outlet } from '@tanstack/react-location';
import { DashboardLayout } from '../layout';

export function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
