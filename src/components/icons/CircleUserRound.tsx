import Svg from 'react-native-svg';

import { CustomIconProps, customIconProps } from './custom-icon';

// See: https://lucide.dev/icons/circle-user-round
export const CircleUserRound = ({ ...props }: CustomIconProps) => {
  const iconProps = customIconProps(props);

  return (
    <Svg
      width={iconProps.width}
      height={iconProps.height}
      viewBox={iconProps.viewBox}
      fill={iconProps.fill}
      stroke={iconProps.stroke}
      strokeWidth={iconProps.strokeWidth}
      strokeLinecap={iconProps.strokeLineCap}
      strokeLinejoin={iconProps.strokeLineJoin}
      className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
    >
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
      <circle cx="12" cy="12" r="10" />
    </Svg>
  );
};
