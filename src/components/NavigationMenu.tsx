import { CircleUserRound } from './icons/CircleUserRound';
import { Heart } from './icons/Heart';
import { Layers } from './icons/Layers';
import { Moon } from './icons/Moon';
import { Scan } from './icons/Scan';
import { Sun } from './icons/Sun';
import { NavigationMenuItem } from './NavigationMenuItem';
import { iconStyle } from './styles';
import { Fab, FabIcon } from './ui/fab';
import { Menu } from './ui/menu';

interface NavigationMenuProps {
  readonly colorMode: 'light' | 'dark';
  readonly toggleColorMode: () => void;
}

export const NavigationMenu = ({ ...props }: NavigationMenuProps) => {
  const componentId = 'navigation-menu';

  return (
    <Menu
      id={componentId}
      placement="top"
      offset={18}
      trigger={({ ...triggerProps }) => {
        return (
          <Fab
            {...triggerProps}
            className="bg-black text-white dark:bg-white dark:text-black"
            placement="bottom right"
            size="lg"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
          >
            <FabIcon as={() => Heart({ width: iconStyle.common.size })} />
          </Fab>
        );
      }}
    >
      <NavigationMenuItem
        parentComponentId={componentId}
        key="Account"
        icon={CircleUserRound({ width: iconStyle.menu.size })}
        textValue="Account"
      />
      <NavigationMenuItem
        parentComponentId={componentId}
        key="CardScanner"
        icon={Scan({ width: iconStyle.menu.size })}
        textValue="Card Scanner"
      />
      <NavigationMenuItem
        parentComponentId={componentId}
        key="Manage Inventory"
        icon={Layers({ width: iconStyle.menu.size })}
        textValue="Manage Inventory"
      />
      <NavigationMenuItem
        parentComponentId={componentId}
        key="ThemeToggle"
        icon={
          props.colorMode === 'light'
            ? Moon({ width: iconStyle.menu.size })
            : Sun({ width: iconStyle.menu.size })
        }
        textValue={props.colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        onPress={props.toggleColorMode}
      />
    </Menu>
  );
};
