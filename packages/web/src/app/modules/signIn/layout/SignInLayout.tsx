import { AppLayout, Header } from '@app/core/layout';
import { GithubIcon } from '@app/shared/components';
import { FlexLayout } from '@lib/ui';
import { ActionIcon, MantineTheme, Space, Text, useMantineTheme } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function SignInLayout({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();

  return (
    <AppLayout header={<Header theme={theme} />} footer={<Footer theme={theme} />}>
      {children}
    </AppLayout>
  );
}

function Footer({ theme }: { theme: MantineTheme }) {
  return (
    <FlexLayout
      direction="row"
      justifyContent="center"
      padding={20}
      style={{
        borderTop: `1px solid ${theme.other.schemes[theme.colorScheme].surface4}`
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
