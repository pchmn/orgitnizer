// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@welldone-software/why-did-you-render" />
import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';

if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true
  });
}
