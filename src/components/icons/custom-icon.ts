import { Linecap, Linejoin } from 'react-native-svg';

export interface CustomIconProps {
  readonly width: number;
  readonly height?: number;
  readonly viewBox?: string;
  readonly fill?: string;
  readonly stroke?: string;
  readonly strokeWidth?: string;
  readonly strokeLineCap?: Linecap;
  readonly strokeLineJoin?: Linejoin;
}

export const customIconProps = (props: CustomIconProps): CustomIconProps => {
  return {
    ...props,
    height: props.height ?? props.width,
    viewBox: props.viewBox ?? '0 0 24 24',
    fill: props.fill ?? 'none',
    stroke: props.stroke ?? 'currentColor',
    strokeWidth: props.strokeWidth ?? '1.25',
    strokeLineCap: props.strokeLineCap ?? 'round',
    strokeLineJoin: props.strokeLineJoin ?? 'round',
  };
};
