import { textStyle } from '../styles';
import { Text } from '../ui/text';

interface CustomStyledTextElementProps {
  readonly componentId: string;
  readonly text: string;
}

interface CustomStyledTextProps {
  readonly textStyle: string;
  readonly elementProps?: CustomStyledTextElementProps;
}

export class CustomStyledText {
  readonly textStyle: string;

  constructor(props: CustomStyledTextProps) {
    this.textStyle = props?.textStyle;
  }

  /**
   * Get the Text element.
   * @param props Properties passed from the parent element to display text
   * @returns React element
   */
  public getElement(elementProps: CustomStyledTextElementProps): JSX.Element {
    return (
      <Text id={`${elementProps.componentId}`} className={this.textStyle}>
        {elementProps.text}
      </Text>
    );
  }
}

export const StyledHeader = new CustomStyledText({
  textStyle: textStyle.header,
});
export const StyledSubheader = new CustomStyledText({
  textStyle: textStyle.subheader,
});
export const StyledText = new CustomStyledText({ textStyle: textStyle.text });
