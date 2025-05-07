import { useRef } from 'react';

import { CircleUserRound } from './icons/CircleUserRound';
import { Heart } from './icons/Heart';
import { Layers } from './icons/Layers';
import { Moon } from './icons/Moon';
import { Scan } from './icons/Scan';
import { Sun } from './icons/Sun';
import { NavigationMenuItem } from './NavigationMenuItem';
import { appIconStyle } from './styles';
import { useTheme } from './ThemeProvider';
import { Fab, FabIcon } from './ui/fab';
import { Menu } from './ui/menu';

export const NavigationMenu = () => {
  const componentId = 'navigation-menu';

  const { theme, toggleTheme } = useTheme();

  const menuRef = useRef(null);

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
            <FabIcon as={() => Heart({ width: appIconStyle.common.size })} />
          </Fab>
        );
      }}
    >
      {NavigationMenuItem(
        {
          parentComponentId: componentId,
          key: 'Account',
          icon: CircleUserRound({ width: appIconStyle.menu.size }),
          textValue: 'Account',
        },
        menuRef
      )}
      {NavigationMenuItem(
        {
          parentComponentId: componentId,
          key: 'CardScanner',
          icon: Scan({ width: appIconStyle.menu.size }),
          textValue: 'Card Scanner',
        },
        menuRef
      )}
      {NavigationMenuItem(
        {
          parentComponentId: componentId,
          key: 'ManageInventory',
          icon: Layers({ width: appIconStyle.menu.size }),
          textValue: 'Manage Inventory',
        },
        menuRef
      )}
      {NavigationMenuItem(
        {
          parentComponentId: componentId,
          key: 'ThemeToggle',
          icon:
            theme === 'light'
              ? Moon({ width: appIconStyle.menu.size })
              : Sun({ width: appIconStyle.menu.size }),
          textValue: theme === 'light' ? 'Dark Mode' : 'Light Mode',
          onPress: toggleTheme,
        },
        menuRef
      )}
    </Menu>
  );
};
