import { Stack, ToggleColorScheme } from '@lib/ui';
import { useMediaQuery } from '@mantine/hooks';
import { PropsWithChildren } from 'react';
import { DrawerContent } from './Drawer/DrawerContent';
import { MobileDrawer } from './Drawer/MobileDrawer';

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  const matches = useMediaQuery('(max-width: 755px)');

  return (
    <Stack>
      {matches && <MobileDrawer />}
      <Stack direction="row" style={{ minHeight: '100vh' }} spacing={0}>
        {!matches && <DrawerContent />}
        <Stack style={{ height: '100vh', overflow: 'auto', flexGrow: 1 }} spacing={0}>
          <div
            style={{
              flexGrow: 1,
              position: 'relative',
              padding: '30px'
            }}
          >
            {children}
            {!matches && <ToggleColorScheme style={{ position: 'absolute', top: 30, right: 30 }} />}
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
}
