import { AppLogo } from '@app/shared/components';
import { useAuth } from '@lib/core';
import { FlexLayout, ToggleColorScheme } from '@lib/ui';
import { Button, Navbar } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  const { signOut } = useAuth();

  return (
    <FlexLayout direction="row" style={{ minHeight: '100vh' }} spacing={0}>
      <Navbar
        height="100vh"
        p="xl"
        width={{ base: 300 }}
        styles={(theme) => ({
          root: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white }
        })}
      >
        <Navbar.Section>
          <FlexLayout direction="row" justifyContent="space-between" alignItems="center">
            <AppLogo direction="row" size="sm" />
            <ToggleColorScheme />
          </FlexLayout>
        </Navbar.Section>
        <Navbar.Section grow mt="md">
          {/* Links sections */}
        </Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
      <FlexLayout style={{ height: 'calc(100vh - 70px)', overflow: 'auto' }} spacing={0}>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            padding: '0 16px'
          }}
        >
          {children}
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </FlexLayout>
    </FlexLayout>
  );
}
