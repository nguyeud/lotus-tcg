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

export const NavigationMenuItem = ({ ...props }: NavigationMenuItemProps) => {
  const componentId = 'navigation-menu-item';

  return (
    <MenuItem
      id={`${props.parentComponentId}-${componentId}-${props.key}`}
      key={props.key}
      textValue={props.textValue ?? props.key}
    >
      <Icon as={() => props.icon} style={appIconStyle.menu.style} />
      <MenuItemLabel className={appTextStyle.label}>
        {props.label}
      </MenuItemLabel>
    </MenuItem>
  );
};
