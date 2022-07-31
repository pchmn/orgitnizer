import { Icon, IconProps } from '@lib/ui';

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127A5.5 5.5 0 1 1 8.5 3zm0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </Icon>
  );
}
