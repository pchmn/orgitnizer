import { AppLogo, GithubIcon } from '@app/shared/components';
import { FlexLayout } from '@lib/ui';
import { ActionIcon, Header as MantineHeader, ScrollArea, Space, Text, useMantineTheme } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { HeaderMenu } from './HeaderMenu';

export function AppLayout({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();

  return (
    <>
      <FlexLayout style={{ minHeight: '100vh' }} spacing={0}>
        <Header />
        <ScrollArea style={{ height: 'calc(100vh - 70px)' }}>
          <FlexLayout style={{ minHeight: 'calc(100vh - 70px)' }} spacing={0}>
            <div
              style={{
                flexGrow: 1,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                padding: 0
              }}
            >
              {children}
            </div>
            <Footer />
          </FlexLayout>
        </ScrollArea>
      </FlexLayout>
    </>
  );
}

function Header() {
  return (
    <MantineHeader height={70} p="md" style={{ position: 'sticky' }}>
      <FlexLayout direction="row" justifyContent="space-between" fullHeight alignItems="center">
        <AppLogo direction="row" size="sm" />
        <HeaderMenu />
      </FlexLayout>
    </MantineHeader>
  );
}

function Footer() {
  const theme = useMantineTheme();

  return (
    <FlexLayout
      direction="row"
      justifyContent="center"
      padding={20}
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff'
      }}
    >
      <Text size="sm">Orgitnizer · Made by pchmn ·</Text>
      <Space w={5} />
      <ActionIcon size="sm">
        <GithubIcon />
      </ActionIcon>
    </FlexLayout>
  );
}
