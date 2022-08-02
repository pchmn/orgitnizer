import { CSSObject, MantineTheme } from '@mantine/core';

interface ThemeComponent {
  defaultProps?: Record<string, unknown>;
  classNames?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles?: Record<string, CSSObject> | ((theme: MantineTheme, params: any) => Record<string, CSSObject>);
}

export const componentsTheme: Record<string, ThemeComponent> = {
  Button: {
    styles: (theme, params) => ({
      root: {
        transition: 'all 0.25s',
        boxShadow:
          params.variant === 'filled'
            ? 'rgb(0 0 0 / 20%) 0px 1px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'
            : undefined,
        '&:hover': {
          boxShadow:
            params.variant === 'filled'
              ? 'rgb(0 0 0 / 20%) 0px 2px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px'
              : undefined
        }
      },
      label: {
        color: params.variant === 'filled' ? theme.black : undefined
      },
      icon: {
        color: params.variant === 'filled' ? theme.black : undefined,
        '& svg': {
          stroke: params.variant === 'filled' ? theme.black : undefined
        }
      }
    })
  },
  Input: {
    styles: (theme) => ({
      input: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'border-color 0.25s, box-shadow 0.25s',
        '&:focus-within': {
          borderColor: `${theme.colors.violet[8]} !important`
        },
        '&:hover': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[6]
        }
      }
    })
  },
  MultiSelect: {
    styles: (theme) => ({
      defaultValue: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }
    })
  },
  ActionIcon: {
    styles: (theme) => ({
      root: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7]
      }
    })
  }
};
