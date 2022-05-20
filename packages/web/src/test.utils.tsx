import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function ProviderTestContainer({ children }: PropsWithChildren<unknown>) {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
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
