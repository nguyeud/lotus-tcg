import { Path } from 'react-native-svg';

import { CustomIcon, IconShapeProps } from '../custom_ui/CustomIcon';

// See: https://lucide.dev/icons/plus
export const Plus = (props: IconShapeProps) =>
  new CustomIcon().getElement({
    shapeProps: {
      width: props.width,
    },
    shapeNode: (
      <>
        <Path d="M5 12h14" />
        <Path d="M12 5v14" />
      </>
    ),
  });
