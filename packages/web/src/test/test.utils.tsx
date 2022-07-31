import { VokerUiProvider } from '@lib/ui';
import { render, RenderOptions, waitFor } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

function ProviderTestContainer({ children }: PropsWithChildren<unknown>) {
  return (
    <VokerUiProvider>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {/* <Router location={location} key={location.current.pathname} routes={[]}>
          {children}
        </Router> */}
        {children}
      </QueryClientProvider>
    </VokerUiProvider>
  );
}

export const renderWithProviders = async (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const container = render(ui, {
    wrapper: ProviderTestContainer,
    ...options
  });
  await waitFor(() => {
    if (queryClient?.isMutating()) {
      console.log('isMutating');
    }
    if (queryClient?.isFetching() || queryClient?.isMutating()) {
      throw new Error('The react-query queryCache is still fetching');
    }
  });
  return container;
};

beforeEach(() => queryClient?.clear());
