import { iconStyle, textStyle } from './styles';
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
      <Icon as={() => props.icon} style={iconStyle.menu.style} />
      <MenuItemLabel className={textStyle.label}>{props.label}</MenuItemLabel>
    </MenuItem>
  );
};
