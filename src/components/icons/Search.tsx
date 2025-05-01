import Svg from 'react-native-svg';

import { CustomIconProps, customIconProps } from './custom-icon';

// See: https://lucide.dev/icons/search
export const Search = ({ ...props }: CustomIconProps) => {
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
      className="lucide lucide-search-icon lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Svg>
  );
};
