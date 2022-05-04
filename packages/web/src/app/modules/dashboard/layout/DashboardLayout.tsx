import { AppLayout, Header } from '@app/core/layout';
import { useMantineTheme } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();

  return <AppLayout header={<Header theme={theme} />}>{children}</AppLayout>;
}
