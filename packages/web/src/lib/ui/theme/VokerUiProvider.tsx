import { useStorage } from '@lib/core';
import {
  ColorScheme,
  MantineColor,
  MantineProvider,
  MantineThemeOverride,
  TypographyStylesProvider
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import React, { createContext, PropsWithChildren, useContext } from 'react';

type ThemeSettingsContext = {
  themeSettings: MantineThemeOverride | undefined;
  toggleColorScheme: (value?: ColorScheme | undefined) => void;
  setPrimaryColor: (primaryColor: MantineColor) => void;
};

export const ThemeSettingsContext = createContext({} as ThemeSettingsContext);

export const useThemeSettings = () => useContext(ThemeSettingsContext);

export function VokerUiProvider({ children }: PropsWithChildren<unknown>) {
  const preferredColorScheme = useColorScheme();

  const [themeSettings, setThemeSettings] = useStorage<MantineThemeOverride>({
    key: 'mantineThemeSettings',
    defaultValue: {
      primaryColor: 'violet',
      colorScheme: preferredColorScheme
    }
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    console.log('toggleColorSchem');
    setThemeSettings({
      ...themeSettings,
      colorScheme: value || (themeSettings?.colorScheme === 'dark' ? 'light' : 'dark')
    });
  };

  const setPrimaryColor = (primaryColor: MantineColor) => {
    setThemeSettings({
      ...themeSettings,
      primaryColor
    });
  };

  return (
    <ThemeSettingsContext.Provider value={{ themeSettings, toggleColorScheme, setPrimaryColor }}>
      <MantineProvider
        theme={{
          ...themeSettings,
          fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          headings: {
            fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
          },
          radius: {
            sm: 8
          }
        }}
      >
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
      </MantineProvider>
    </ThemeSettingsContext.Provider>
  );
}
