import { AppLogo, MenuIcon } from '@app/shared/components';
import { Stack, ToggleColorScheme } from '@lib/ui';
import { ActionIcon, Drawer as MantineDrawer, Header as MantineHeader, useMantineTheme } from '@mantine/core';
import { DrawerContent } from './DrawerContent';
import { DrawerProvider, useDrawer } from './DrawerContext';

export function MobileDrawer() {
  return (
    <DrawerProvider>
      <Header />
      <Drawer />
    </DrawerProvider>
  );
}

function Drawer() {
  const { opened, toggle } = useDrawer();

  return (
    <MantineDrawer opened={opened} onClose={toggle} size="80%" overlayBlur={2} withCloseButton={false}>
      <DrawerContent showAppLogo={false} />
    </MantineDrawer>
  );
}

function Header() {
  const theme = useMantineTheme();
  const { toggle } = useDrawer();

  return (
    <MantineHeader
      height={60}
      p="md"
      style={{
        position: 'sticky',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        fontSize: '18px'
      }}
    >
      <Stack direction="row" alignItems="center" fullHeight spacing="md">
        <ActionIcon size="lg" onClick={toggle}>
          <MenuIcon size="lg" />
        </ActionIcon>
        <Stack direction="row" justifyContent="space-between" fullHeight alignItems="center" flexGrow={1}>
          <AppLogo direction="row" size="xs" />
          <ToggleColorScheme />
        </Stack>
      </Stack>
    </MantineHeader>
  );
}
