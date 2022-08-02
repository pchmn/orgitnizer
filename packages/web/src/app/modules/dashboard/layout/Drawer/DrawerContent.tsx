import { AppLogo, RepositoryIcon, StarIcon } from '@app/shared/components';
import { Stack } from '@lib/ui';
import { Divider, Navbar, Space } from '@mantine/core';
import { DrawerItem } from './DrawerItem';
import { User } from './User';

export function DrawerContent({ isMobile = true }: { isMobile?: boolean }) {
  return (
    <Navbar
      p="xl"
      height={isMobile ? 'calc(100% - 20px)' : 'auto'}
      width={{ lg: 300, sm: 250 }}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          margin: 10,
          borderRadius: 8,
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 1px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'
        }
      })}
    >
      <Navbar.Section mb={50}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <AppLogo direction="row" size={isMobile ? 'sm' : 'xs'} />
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
