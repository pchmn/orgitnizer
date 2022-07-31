import { CSSObject, MantineTheme } from '@mantine/core';

interface ThemeComponent {
  defaultProps?: Record<string, unknown>;
  classNames?: Record<string, string>;
  styles?: Record<string, CSSObject> | ((theme: MantineTheme, params: unknown) => Record<string, CSSObject>);
}

export const componentsTheme: Record<string, ThemeComponent> = {
  Button: {
    styles: {
      filled: {
        color: '#000',
        transition: 'all 0.25s',
        boxShadow:
          'rgb(0 0 0 / 20%) 0px 1px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        '&:hover': {
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px'
        },
        '&.mantine-Button-loading': {
          cursor: 'not-allowed',
          '& svg': {
            stroke: '#000'
          }
        }
      }
    }
  },
  Input: {
    styles: (theme) => ({
      input: {
        transition: 'border-color 0.25s, box-shadow 0.25s',
        '&:focus-within': {
          borderColor: `${theme.colors.violet[8]} !important`
        },
        '&:hover': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[6]
        }
      }
    })
  }
};
