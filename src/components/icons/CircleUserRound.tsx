import { Circle, Path } from 'react-native-svg';

import { CustomIcon, IconShapeProps } from '../custom_ui/CustomIcon';

// See: https://lucide.dev/icons/circle-user-round
export const CircleUserRound = (props: IconShapeProps) =>
  new CustomIcon().getElement({
    shapeProps: {
      width: props.width,
    },
    shapeNode: (
      <>
        <Path d="M18 20a6 6 0 0 0-12 0" />
        <Circle cx="12" cy="10" r="4" />
        <Circle cx="12" cy="12" r="10" />
      </>
    ),
  });
