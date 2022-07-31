import { FlexLayout } from '@lib/ui';
import { Text } from '@mantine/core';
import { Link } from '@tanstack/react-location';
import styled from 'styled-components';
import { useDrawer } from './DrawerContext';

interface DrawerItemProps {
  to: string;
  isActive?: boolean;
  icon: React.ReactNode;
  label: string;
}

const DrawerItemContainer = styled(FlexLayout)<{ isActive?: boolean }>(({ isActive, theme }) => ({
  backgroundColor: isActive
    ? theme.colorScheme === 'dark'
      ? theme.colors.dark[5]
      : theme.colors.gray[1]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[7]
    : theme.white,
  borderRadius: theme.radius.md,
  padding: '8px 16px',
  color: isActive && theme.colorScheme === 'dark' ? theme.white : 'inherit',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
  }
}));

export function DrawerItem({ to, icon, label }: DrawerItemProps) {
  const { toggle } = useDrawer();

  return (
    <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
      {({ isActive }) => (
        <DrawerItemContainer onClick={toggle} direction="row" isActive={isActive} alignItems="center">
          {icon}
          <Text weight={isActive ? 600 : 400} size="sm">
            {label}
          </Text>
        </DrawerItemContainer>
      )}
    </Link>
  );
}
