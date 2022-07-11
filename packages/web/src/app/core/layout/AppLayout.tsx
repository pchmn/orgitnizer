import { FlexLayout } from '@lib/ui';
import * as React from 'react';
import { PropsWithChildren } from 'react';

interface AppLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function AppLayout({ header, footer, children }: PropsWithChildren<AppLayoutProps>) {
  return (
    <>
      <FlexLayout style={{ minHeight: '100vh' }} spacing={0}>
        {header}
        {/* <ScrollArea style={{ height: 'calc(100vh - 70px)' }}> */}
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
          {footer}
        </FlexLayout>
        {/* </ScrollArea> */}
      </FlexLayout>
    </>
  );
}
