import { Pressable } from 'react-native';

import { appIconStyle, appTextStyle } from './styles';
import { Icon } from './ui/icon';
import { MenuItem, MenuItemLabel } from './ui/menu';

interface NavigationMenuItemProps {
  readonly parentComponentId: string;
  readonly key: string;
  readonly icon: JSX.Element;
  readonly textValue?: string;
  readonly label?: string;
  readonly onPress?: () => void;
}

export const NavigationMenuItem = (
  props: NavigationMenuItemProps,
  ref: React.ForwardedRef<React.ComponentPropsWithoutRef<typeof Pressable>>
) => {
  const componentId = 'navigation-menu-item';

  return (
    <MenuItem
      ref={ref}
      id={`${props.parentComponentId}-${componentId}-${props.key}`}
      key={props.key}
      textValue={props.textValue ?? props.key}
      onPress={props.onPress}
    >
      <Icon as={() => props.icon} style={appIconStyle.menu.style} />
      <MenuItemLabel className={appTextStyle.label}>
        {props.label}
      </MenuItemLabel>
    </MenuItem>
  );
};
