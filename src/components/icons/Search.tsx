import { Circle, Path } from 'react-native-svg';

import { CustomIcon, IconShapeProps } from '../custom_ui/CustomIcon';

// See: https://lucide.dev/icons/search
export const Search = (props: IconShapeProps) =>
  new CustomIcon().getElement({
    shapeProps: {
      width: props.width,
    },
    shapeNode: (
      <>
        <Circle cx="11" cy="11" r="8" />
        <Path d="m21 21-4.3-4.3" />
      </>
    ),
  });
