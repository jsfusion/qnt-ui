import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { themeProps, spacings } from '../../../settings';

const {
  primaryColor,
  secondaryColor,
  disabledColor,
  primaryFontColor,
  secondaryFontColor,
  disabledFontColor,
} = themeProps;

const { spacing1, spacing2, spacing3, spacing6 } = spacings;

const padding = theme('size', {
  small: `${spacing1} ${spacing2}`,
  medium: `${spacing2} ${spacing3}`,
  large: `${spacing3} ${spacing6}`,
});

const bgColor = theme('variant', {
  primary: primaryColor,
  secondary: secondaryColor,
});

const fgColor = theme('variant', {
  primary: primaryFontColor,
  secondary: secondaryFontColor,
});

const borderStyle = theme('variant', {
  primary: `2px solid ${primaryColor}`,
  secondary: `2px solid ${primaryColor}`,
});

export const StyledButton = styled.button`
  padding: ${ padding };
  margin: 5px;
  cursor: pointer;
  background: ${bgColor};
  color: ${fgColor};
  outline: none;
  font-weight: bold;
  border: ${borderStyle};
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

  :hover {
    box-shadow: 1px 1px 10px -5px #000000;
  }

  ${props => props.disabled && css`
    background: ${props.variant === 'primary' ? disabledColor : secondaryColor};
    color: ${props.variant === 'primary' ? disabledFontColor : disabledColor};
    border-color: ${disabledColor};
    cursor: not-allowed;

    :hover {
      box-shadow: none;
    }
  `}
`;
