import { MantineNumberSize } from '@mantine/core';
import { styled } from 'goober';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = FlexCommon | 'left' | 'right' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignContent = FlexCommon | 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

type Globals = 'inherit' | 'initial' | 'unset';
type FlexCommon = 'flex-start' | 'flex-end' | 'start' | 'end';
type MixProperties<A extends string, B extends string> = `${A} ${B}`;
type AlignItems = FlexCommon | 'stretch' | 'self-start' | 'self-end' | 'center' | 'baseline';

export interface FlexLayoutProps {
  direction?: FlexDirection | Globals;
  flexWrap?: FlexWrap | Globals;
  flexFlow?: MixProperties<FlexDirection, FlexWrap> | Globals;
  justifyContent?:
    | JustifyContent
    | MixProperties<'safe', JustifyContent>
    | MixProperties<'unsafe', JustifyContent>
    | Globals;
  alignItems?: AlignItems | MixProperties<'safe', AlignItems> | MixProperties<'unsafe', AlignItems> | Globals;
  alignContent?: AlignContent | MixProperties<'safe', AlignContent> | MixProperties<'unsafe', AlignContent> | Globals;
  fullHeight?: boolean;
  growChildren?: boolean;
  spacing?: MantineNumberSize;
  padding?: MantineNumberSize;
  flexGrow?: number;
}

export const FlexLayout = styled('div')<FlexLayoutProps>(
  ({
    direction: flexDirection = 'column',
    flexWrap,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    fullHeight,
    spacing = 'sm',
    growChildren,
    padding = 0,
    flexGrow,
    theme,
    onClick
  }) => ({
    display: 'flex',
    flexDirection,
    flexWrap,
    justifyContent,
    flexFlow,
    alignItems,
    alignContent,
    height: fullHeight ? '100%' : 'auto',
    gap: theme.fn.size({ size: spacing, sizes: theme.spacing }) + 'px',
    padding: theme.fn.size({ size: padding, sizes: theme.spacing }) + 'px',
    '& > *': {
      flexGrow: growChildren ? 1 : 0
    },
    cursor: onClick ? 'pointer' : 'default',
    flexGrow
  })
);
