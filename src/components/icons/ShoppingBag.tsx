import Svg from 'react-native-svg';

import { CustomIconProps, customIconProps } from './custom-icon';

// See: https://lucide.dev/icons/shopping-bag
export const ShoppingBag = ({ ...props }: CustomIconProps) => {
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
      className="lucide lucide-shopping-bag-icon lucide-shopping-bag"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Svg>
  );
};
