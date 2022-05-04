import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineColor,
  MantineProvider,
  MantineThemeOverride,
  TypographyStylesProvider
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { schemes, themeColors } from './colors';
import { themeStyles } from './theme';

type ThemeSettingsContext = {
  themeSettings: MantineThemeOverride | undefined;
  toggleColorScheme: (value?: ColorScheme | undefined) => void;
  setPrimaryColor: (primaryColor: MantineColor) => void;
};

export const ThemeSettingsContext = createContext({} as ThemeSettingsContext);

export const useThemeSettings = () => useContext(ThemeSettingsContext);

export function VokerUiProvider({ children }: PropsWithChildren<unknown>) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          colors: themeColors,
          primaryColor: 'primary',
          primaryShade: { light: 6, dark: 2 },
          other: schemes,
          fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          headings: {
            fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
          },
          defaultRadius: 'md'
        }}
        styles={themeStyles}
        // defaultProps={defaultProps}
      >
        <Global
          styles={(theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: theme.other.schemes[theme.colorScheme].background,
              color: theme.other.schemes[theme.colorScheme].onBackground,
              WebkitFontSmoothing: 'antialiased'
            }
          })}
        />
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
