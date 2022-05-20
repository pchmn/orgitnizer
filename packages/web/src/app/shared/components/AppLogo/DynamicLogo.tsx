import { MantineNumberSize, useMantineTheme } from '@mantine/core';
import { styled } from 'goober';
import * as React from 'react';

const sizes = {
  xs: 38,
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
      </svg>
    </Logo>
  );
}
