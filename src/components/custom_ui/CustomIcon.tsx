import { ReactNode } from 'react';
import Svg, { Linecap, Linejoin } from 'react-native-svg';

export interface IconShapeProps {
  readonly width: number;
  readonly height?: number;
  readonly viewBox?: string;
  readonly fill?: string;
  readonly stroke?: string;
  readonly strokeWidth?: string;
  readonly strokeLineCap?: Linecap;
  readonly strokeLineJoin?: Linejoin;
}

export interface CustomIconProps {
  readonly shapeProps: IconShapeProps;
  readonly shapeNode?: ReactNode;
}

export class CustomIcon {
  /**
   * Get default Svg props for non-required properties.
   * @param props Properties to create an Svg element
   * @returns Icon properties
   */
  private getDefaultSvgProps(props: IconShapeProps): IconShapeProps {
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
  }

  /**
   * Get the SVG element.
   * @param props Properties to create an Svg element
   * @returns React element
   */
  public getElement(props: CustomIconProps): JSX.Element {
    if (!props.shapeNode) {
      throw new SyntaxError(
        'SyntaxError: Cannot create a custom icon. The shape node property must be set in order to create the Svg path.'
      );
    }

    const iconProps = this.getDefaultSvgProps(props.shapeProps);

    return (
      <Svg
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill={iconProps.fill}
        stroke={iconProps.stroke}
        strokeWidth={iconProps.strokeWidth}
        strokeLinecap={iconProps.strokeLineCap}
        strokeLinejoin={iconProps.strokeLineJoin}
      >
        {props.shapeNode}
      </Svg>
    );
  }
}
