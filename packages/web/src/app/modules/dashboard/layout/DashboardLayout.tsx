import { AppLayout, Header } from '@app/core/layout';
import { useFirebaseAuth } from '@lib/core';
import { Button, useMantineTheme } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();
  const { signOut } = useFirebaseAuth();

  return (
    <AppLayout header={<Header theme={theme} right={<Button onClick={() => signOut()}>Sign out</Button>} />}>
      {children}
    </AppLayout>
  );
}
