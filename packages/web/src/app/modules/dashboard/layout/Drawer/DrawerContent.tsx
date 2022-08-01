import { AppLogo, RepositoryIcon, StarIcon } from '@app/shared/components';
import { Stack } from '@lib/ui';
import { Divider, Navbar, Space } from '@mantine/core';
import { DrawerItem } from './DrawerItem';
import { User } from './User';

export function DrawerContent({ showAppLogo = true }: { showAppLogo?: boolean }) {
  return (
    <Navbar
      height="100vh"
      p="xl"
      width={{ lg: 300, sm: 250 }}
      styles={(theme) => ({
        root: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white }
      })}
    >
      <Navbar.Section mb={50}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <AppLogo direction="row" size={showAppLogo ? 'sm' : 'xs'} />
        </Stack>
      </Navbar.Section>
      <Navbar.Section grow>
        <Stack spacing="xs">
          <DrawerItem to="/dashboard/stars" icon={<StarIcon size={22} />} label="My Stars" />
          <DrawerItem to="/dashboard/repositories" icon={<RepositoryIcon size={22} />} label="My Repositories" />
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Divider />
        <Space h="lg" />
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
