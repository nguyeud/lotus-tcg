import { Line } from 'react-native-svg';

import { CustomIcon, IconShapeProps } from '../custom_ui/CustomIcon';

// See: https://lucide.dev/icons/sliders-horizontal
export const SlidersHorizontal = (props: IconShapeProps) =>
  new CustomIcon().getElement({
    shapeProps: {
      width: props.width,
    },
    shapeNode: (
      <>
        <Line x1="21" x2="14" y1="4" y2="4" />
        <Line x1="10" x2="3" y1="4" y2="4" />
        <Line x1="21" x2="12" y1="12" y2="12" />
        <Line x1="8" x2="3" y1="12" y2="12" />
        <Line x1="21" x2="16" y1="20" y2="20" />
        <Line x1="12" x2="3" y1="20" y2="20" />
        <Line x1="14" x2="14" y1="2" y2="6" />
        <Line x1="8" x2="8" y1="10" y2="14" />
        <Line x1="16" x2="16" y1="18" y2="22" />
      </>
    ),
  });
