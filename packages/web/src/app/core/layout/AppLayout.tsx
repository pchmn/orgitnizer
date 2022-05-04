import { FlexLayout } from '@lib/ui';
import { ScrollArea } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

interface AppLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function AppLayout({ header, footer, children }: PropsWithChildren<AppLayoutProps>) {
  return (
    <>
      <FlexLayout style={{ minHeight: '100vh' }} spacing={0}>
        {header}
        <ScrollArea style={{ height: 'calc(100vh - 70px)' }}>
          <FlexLayout style={{ minHeight: 'calc(100vh - 70px)' }} spacing={0}>
            <div
              style={{
                flexGrow: 1,
                padding: 0
              }}
            >
              {children}
            </div>
            {footer}
          </FlexLayout>
        </ScrollArea>
      </FlexLayout>
    </>
  );
}
