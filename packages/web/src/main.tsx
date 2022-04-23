import App from '@app/App';
import '@app/core/i18n';
import '@conf/firebase';
import isPropValid from '@emotion/is-prop-valid';
import { VokerUiProvider } from '@lib/ui';
import { useMantineTheme } from '@mantine/core';
import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

setup(
  React.createElement,
  undefined,
  useMantineTheme,
  shouldForwardProp((prop) => {
    // Do NOT forward props that start with `$` symbol
    return isPropValid(prop);
  })
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VokerUiProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </VokerUiProvider>
  </React.StrictMode>
);
