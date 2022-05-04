import { AppLogo } from '@app/shared/components';
import { FlexLayout, ToggleColorScheme } from '@lib/ui';
import { Header as MantineHeader, MantineTheme } from '@mantine/core';
import React from 'react';

interface HeaderProps {
  theme: MantineTheme;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export function Header({ theme, left, right }: HeaderProps) {
  return (
    <MantineHeader
      height={70}
      p="md"
      style={{
        position: 'sticky',
        backgroundColor: theme.other.schemes[theme.colorScheme].surface1,
        borderBottomColor: theme.other.schemes[theme.colorScheme].surface4
      }}
    >
      <FlexLayout direction="row" alignItems="center" fullHeight grow>
        {left}
        <FlexLayout direction="row" justifyContent="space-between" fullHeight alignItems="center">
          <AppLogo direction="row" size="sm" />
          <ToggleColorScheme />
        </FlexLayout>
        {right}
      </FlexLayout>
    </MantineHeader>
  );
}
