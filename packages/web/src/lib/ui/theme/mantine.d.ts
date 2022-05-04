import { Tuple } from '@mantine/core';

type CustomColors = 'primary' | 'secondary' | 'tertiary' | 'error';

type Scheme = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surface5: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  shadow: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
};

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors | 'neutral' | 'neutralVariant', Tuple<string, 10>>;
  }
  export interface MantineThemeOther {
    schemes: {
      light: Scheme;
      dark: Scheme;
    };
  }
}
