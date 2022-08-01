import { ThemeProvider } from '@emotion/react';
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineColor,
  MantineProvider,
  MantineTheme,
  MantineThemeOverride,
  TypographyStylesProvider,
  useMantineTheme
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { createContext, PropsWithChildren, useContext } from 'react';
import { themeColors } from './colors';
import { componentsTheme } from './theme';

type ThemeSettingsContext = {
  themeSettings: MantineThemeOverride | undefined;
  toggleColorScheme: (value?: ColorScheme | undefined) => void;
  setPrimaryColor: (primaryColor: MantineColor) => void;
};

export const ThemeSettingsContext = createContext({} as ThemeSettingsContext);

export const useThemeSettings = () => useContext(ThemeSettingsContext);

export function UiProvider({ children }: PropsWithChildren<unknown>) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true
  });
  const theme = useMantineTheme();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          colors: themeColors,
          primaryColor: 'violet',
          fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          headings: {
            fontFamily: '"Readex Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
          },
          defaultRadius: 'md',
          breakpoints: {
            sm: 755
          },
          components: componentsTheme
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Global
            styles={(theme: MantineTheme) => ({
              body: {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                WebkitFontSmoothing: 'antialiased'
              }
            })}
          />
          <TypographyStylesProvider>
            <ThemeProvider theme={{ ...theme, colorScheme }}>{children}</ThemeProvider>
          </TypographyStylesProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
