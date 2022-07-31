import styled from '@emotion/styled';
import { MantineNumberSize, useMantineTheme } from '@mantine/core';
import * as React from 'react';

const sizes = {
  xs: 32,
  sm: 38,
  md: 58,
  lg: 78,
  xl: 110
};

interface DynamicLogoProps {
  size?: MantineNumberSize;
  className?: string;
  onAnimationEnd?: React.AnimationEventHandler<SVGElement>;
}

const Logo = styled('div')<{ size: number }>(
  ({ size }) => `
  width: ${size}px;
  height: ${size}px;
  minWidth: ${size}px;
  minHeight: ${size}px;
  display: flex;
  .card {
    filter: drop-shadow(0px 4px 4px rgb(0 0 0 / 0.4));
  }
`
);

export function DynamicLogo({ size = 'md', className, onAnimationEnd }: DynamicLogoProps) {
  const theme = useMantineTheme();
  const iconSize = theme.fn.size({ size, sizes });

  return (
    <Logo size={iconSize}>
      <svg
        className={className}
        onAnimationEnd={onAnimationEnd}
        viewBox="0 0 3777 3362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300C0 134.315 134.315 0 300 0H3477C3642.69 0 3777 134.315 3777 300V3062C3777 3227.69 3642.69 3362 3477 3362H300C134.315 3362 0 3227.69 0 3062V300Z"
          fill={theme.colorScheme === 'dark' ? '#fff' : '#000'}
        />
        <path
          d="M288 406C288 323.157 355.157 256 438 256H3339C3421.84 256 3489 323.157 3489 406V2956C3489 3038.84 3421.84 3106 3339 3106H438C355.157 3106 288 3038.84 288 2956V406Z"
          fill={theme.colorScheme === 'dark' ? '#000' : '#fff'}
        />
        <path
          d="M645 744C645 694.294 685.294 654 735 654H1496C1545.71 654 1586 694.294 1586 744C1586 793.706 1545.71 834 1496 834H735C685.294 834 645 793.706 645 744Z"
          fill="#C89BFE"
        />
        <path
          d="M645 1571C645 1521.29 685.294 1481 735 1481H1957C2006.71 1481 2047 1521.29 2047 1571C2047 1620.71 2006.71 1661 1957 1661H735C685.294 1661 645 1620.71 645 1571Z"
          fill="#C89BFE"
        />
        <path
          d="M937 1150C937 1100.29 977.294 1060 1027 1060H2540C2589.71 1060 2630 1100.29 2630 1150C2630 1199.71 2589.71 1240 2540 1240H1027C977.294 1240 937 1199.71 937 1150Z"
          // fill="#646465"
          fill={theme.colorScheme === 'dark' ? '#646465' : '#A6A6A6'}
        />
        <path
          d="M645 2580C645 2473.96 730.961 2388 837 2388H1615C1721.04 2388 1807 2473.96 1807 2580C1807 2686.04 1721.04 2772 1615 2772H837C730.961 2772 645 2686.04 645 2580Z"
          // fill="#FED977"
          fill={theme.colorScheme === 'dark' ? '#FED977' : '#F0C961'}
        />
        <path
          d="M888.163 2580C888.163 2562.8 902.103 2548.86 919.298 2548.86H1532.7C1549.9 2548.86 1563.84 2562.8 1563.84 2580C1563.84 2597.2 1549.9 2611.14 1532.7 2611.14H919.298C902.103 2611.14 888.163 2597.2 888.163 2580Z"
          fill={theme.colorScheme === 'dark' ? '#000' : '#fff'}
        />
        <path
          d="M1972 2580C1972 2473.96 2057.96 2388 2164 2388H2942C3048.04 2388 3134 2473.96 3134 2580C3134 2686.04 3048.04 2772 2942 2772H2164C2057.96 2772 1972 2686.04 1972 2580Z"
          fill="#66DBC2"
        />
        <path
          d="M2215.16 2580C2215.16 2562.8 2229.1 2548.86 2246.3 2548.86H2859.7C2876.9 2548.86 2890.84 2562.8 2890.84 2580C2890.84 2597.2 2876.9 2611.14 2859.7 2611.14H2246.3C2229.1 2611.14 2215.16 2597.2 2215.16 2580Z"
          fill={theme.colorScheme === 'dark' ? '#000' : '#fff'}
        />
      </svg>

      {/* <svg
        className={className}
        onAnimationEnd={onAnimationEnd}
        viewBox="0 0 896 798"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 71.2076C0 31.8808 31.8628 0 71.1676 0H824.832C864.137 0 896 31.8807 896 71.2076V726.792C896 766.119 864.137 798 824.832 798H71.1676C31.8628 798 0 766.119 0 726.792V71.2076Z"
          fill={theme.colorScheme === 'dark' ? '#fff' : '#000'}
        />
        <path
          d="M68.3209 96.3676C68.3209 76.7042 84.2523 60.7638 103.905 60.7638H792.095C811.748 60.7638 827.679 76.7042 827.679 96.3676V701.632C827.679 721.296 811.748 737.236 792.095 737.236H103.905C84.2523 737.236 68.3209 721.296 68.3209 701.632V96.3676Z"
          fill={theme.colorScheme === 'dark' ? '#000' : '#fff'}
        />
        <path
          d="M153.01 176.595C153.01 164.797 162.569 155.233 174.361 155.233H354.889C366.68 155.233 376.239 164.797 376.239 176.595C376.239 188.393 366.68 197.957 354.889 197.957H174.361C162.569 197.957 153.01 188.393 153.01 176.595Z"
          fill="#9C4142"
        />
        <path
          d="M153.01 372.891C153.01 361.092 162.569 351.528 174.361 351.528H464.25C476.041 351.528 485.6 361.092 485.6 372.891C485.6 384.689 476.041 394.253 464.25 394.253H174.361C162.569 394.253 153.01 384.689 153.01 372.891Z"
          fill="#9C4142"
        />
        <path
          d="M222.28 272.963C222.28 261.164 231.839 251.6 243.63 251.6H602.552C614.344 251.6 623.903 261.164 623.903 272.963C623.903 284.761 614.344 294.325 602.552 294.325H243.63C231.839 294.325 222.28 284.761 222.28 272.963Z"
          // fill="#444345"
          fill={theme.colorScheme === 'dark' ? '#444345' : '#A6A6A6'}
        />
        <path
          d="M153.01 612.385C153.01 587.216 173.403 566.813 198.558 566.813H383.119C408.274 566.813 428.666 587.216 428.666 612.385C428.666 637.555 408.274 657.958 383.119 657.958H198.558C173.403 657.958 153.01 637.555 153.01 612.385Z"
          // fill="#FFDEA8"
          fill={theme.colorScheme === 'dark' ? '#FFDEA8' : '#DEA03B '}
        />
        <path
          d="M210.695 612.385C210.695 608.304 214.002 604.995 218.081 604.995H363.596C367.675 604.995 370.982 608.304 370.982 612.385C370.982 616.467 367.675 619.776 363.596 619.776H218.081C214.002 619.776 210.695 616.467 210.695 612.385Z"
          // fill="#281900"
          fill={theme.colorScheme === 'dark' ? '#281900' : '#FAE8CB'}
        />
        <path
          d="M467.808 612.385C467.808 587.216 488.201 566.813 513.356 566.813H697.917C723.072 566.813 743.464 587.216 743.464 612.385C743.464 637.555 723.072 657.958 697.917 657.958H513.356C488.201 657.958 467.808 637.555 467.808 612.385Z"
          // fill="#FFB3B1"
          fill={theme.colorScheme === 'dark' ? '#FFB3B1' : '#DF6763'}
        />
        <path
          d="M525.493 612.385C525.493 608.304 528.8 604.995 532.879 604.995H678.394C682.473 604.995 685.78 608.304 685.78 612.385C685.78 616.467 682.473 619.776 678.394 619.776H532.879C528.8 619.776 525.493 616.467 525.493 612.385Z"
          // fill="#5F1318"
          fill={theme.colorScheme === 'dark' ? '#5F1318' : '#FFDAD7'}
        />
      </svg> */}
    </Logo>
  );
}
