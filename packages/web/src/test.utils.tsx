import { MantineProvider, useMantineTheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ReactLocation, Router } from '@tanstack/react-location';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();
const location = new ReactLocation({});

function ProviderTestContainer({ children }: PropsWithChildren<unknown>) {
  const theme = useMantineTheme();
  return (
    <MantineProvider>
      <NotificationsProvider>
        <QueryClientProvider client={queryClient}>
          <Router location={location} key={location.current.pathname} routes={[]}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </Router>
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export const renderWithProvider = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, {
    wrapper: ProviderTestContainer,
    ...options
  });
};
