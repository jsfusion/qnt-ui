import styled from 'styled-components';
import theme from 'styled-theming';
import { rem } from 'polished';
import { themeProps } from '../../../settings';

const {
  primaryColor,
  secondaryColor,
  tertiaryColor,
  fontPrimaryColor,
  fontSecondaryColor,
  fontTertiaryColor,
} = themeProps;

const padding = theme('size', {
  small: `${rem('8px')} ${rem('16px')}`,
  medium: `${rem('10px')} ${rem('20px')}`,
  large: `${rem('14px')} ${rem('28px')}`,
});

const bgColor = theme('varient', {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
});

const fgColor = theme('varient', {
  primary: fontPrimaryColor,
  secondary: fontSecondaryColor,
  tertiary: fontTertiaryColor,
});

export const StyledButton = styled.button`
  padding: ${ padding };
  margin: 5px;
  cursor: pointer;
  background-color: ${bgColor};
  color: ${fgColor};
  outline: none;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;
