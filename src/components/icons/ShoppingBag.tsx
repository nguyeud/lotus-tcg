import { Path } from 'react-native-svg';

import { CustomIcon, IconShapeProps } from '../custom_ui/CustomIcon';

// See: https://lucide.dev/icons/shopping-bag
export const ShoppingBag = (props: IconShapeProps) =>
  new CustomIcon().getElement({
    shapeProps: {
      width: props.width,
    },
    shapeNode: (
      <>
        <Path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <Path d="M3 6h18" />
        <Path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  });
