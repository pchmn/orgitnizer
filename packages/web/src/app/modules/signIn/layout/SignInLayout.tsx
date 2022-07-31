import { AppLogo, GithubIcon } from '@app/shared/components';
import { FlexLayout, ToggleColorScheme } from '@lib/ui';
import { ActionIcon, Header as MantineHeader, MantineTheme, Space, Text, useMantineTheme } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function SignInLayout({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();

  return (
    <FlexLayout style={{ minHeight: '100vh' }} spacing={0}>
      <Header theme={theme} />
      <FlexLayout style={{ height: 'calc(100vh - 70px)', overflow: 'auto' }} spacing={0}>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            padding: '0 16px'
          }}
        >
          {children}
        </div>
        <Footer theme={theme} />
      </FlexLayout>
    </FlexLayout>
  );
}

function Header({ theme }: { theme: MantineTheme }) {
  return (
    <MantineHeader
      height={70}
      p="md"
      style={{
        position: 'sticky',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
      }}
    >
      <FlexLayout direction="row" alignItems="center" fullHeight growChildren>
        <FlexLayout direction="row" justifyContent="space-between" fullHeight alignItems="center">
          <AppLogo direction="row" size="sm" />
          <ToggleColorScheme />
        </FlexLayout>
      </FlexLayout>
    </MantineHeader>
  );
}

function Footer({ theme }: { theme: MantineTheme }) {
  return (
    <FlexLayout
      direction="row"
      justifyContent="center"
      padding={20}
      style={{
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`
      }}
    >
      <Text size="sm">Orgitz · Made by pchmn ·</Text>
      <Space w={5} />
      <ActionIcon size="sm">
        <GithubIcon />
      </ActionIcon>
    </FlexLayout>
  );
}
