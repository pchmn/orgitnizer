import { CSSObject, MantineTheme } from '@mantine/core';

export const themeStyles: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, CSSObject> | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
> = {
  Button: () => ({
    filled: {
      color: '#000',
      transition: 'all 0.3s',
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
  }),
  TextInput: (theme) => ({
    input: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'border-color 0.25s, box-shadow 0.25s',
      '&:focus': {
        borderColor: `${theme.colors.violet[8]} !important`,
        boxShadow: `0px 0px 1px 1px ${theme.fn.rgba(theme.colors.violet[8], 0.5)}`
      },
      '&:hover': {
        borderColor: theme.colors.dark[3]
      }
    }
  }),
  MultiSelect: (theme) => ({
    input: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'border-color 0.25s, box-shadow 0.25s',
      '&:focus-within': {
        borderColor: `${theme.colors.violet[8]} !important`,
        boxShadow: `0px 0px 1px 1px ${theme.fn.rgba(theme.colors.violet[8], 0.5)}`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      },
      '&:hover': {
        borderColor: theme.colors.dark[3]
      }
    },
    dropdown: {
      borderRadius: 8,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`
    },
    defaultValue: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
    }
  })
};
