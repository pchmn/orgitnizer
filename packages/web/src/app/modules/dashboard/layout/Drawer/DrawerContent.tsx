import { AppLogo, RepositoryIcon, StarIcon } from '@app/shared/components';
import { FlexLayout } from '@lib/ui';
import { Navbar } from '@mantine/core';
import { DrawerItem } from './DrawerItem';

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
        <FlexLayout direction="row" justifyContent="space-between" alignItems="center">
          <AppLogo direction="row" size={showAppLogo ? 'sm' : 'xs'} />
        </FlexLayout>
      </Navbar.Section>
      <Navbar.Section grow>
        <FlexLayout spacing="xs">
          <DrawerItem to="/dashboard/stars" icon={<StarIcon size={22} />} label="My Stars" />
          <DrawerItem to="/dashboard/repositories" icon={<RepositoryIcon size={22} />} label="My Repositories" />
        </FlexLayout>
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
