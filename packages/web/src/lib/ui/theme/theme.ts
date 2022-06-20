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
  })
};
