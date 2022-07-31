import '@emotion/react';
import { MantineTheme } from '@mantine/core';
import 'react-i18next';
import en from './app/core/i18n/en.json';
import fr from './app/core/i18n/fr.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en';
    // custom resources type
    resources: {
      fr: typeof fr;
      en: typeof en;
    };
  }
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MantineTheme {}
}
