import styled from 'styled-components';
import theme from 'styled-theming';
import { rem } from 'polished';
import { appPrefix, colors, spacings } from '../../../settings';

const {
  ColorFlamingoBase,
  ColorWhiteBase,
} = colors.primary;

const { disable: {ColorDisableBg, ColorDisableFg} } = colors;

const { Spacing2, Spacing3, Spacing4, Spacing8 } = spacings;

const padding = theme('size', {
  small: `${Spacing2} ${Spacing3}`,
  medium: `${Spacing3} ${Spacing4}`,
  large: `${Spacing4} ${Spacing8}`,
});

const bgColor = theme('variant', {
  primary: ColorFlamingoBase,
  secondary: ColorWhiteBase,
});

const fgColor = theme('variant', {
  primary: ColorWhiteBase,
  secondary: ColorFlamingoBase,
});

const borderStyle = theme('variant', {
  primary: `2px solid ${ColorFlamingoBase}`,
  secondary: `2px solid ${ColorFlamingoBase}`,
});

const fontSize = theme('size', {
  small: rem('12px'),
  medium: rem('14px'),
});

export const StyledButton = styled.button`
  text-align: center;
  padding: ${ padding };
  margin: 5px;
  cursor: pointer;
  background: ${bgColor};
  font-size: ${fontSize};
  color: ${fgColor};
  outline: none;
  font-weight: bold;
  border: ${borderStyle};
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

  &:hover {
    box-shadow: 1px 1px 10px -5px #000000;
  }

  &:disabled {
    background: ${props => props.variant === 'primary' ? ColorDisableBg : ColorWhiteBase};
    color: ${ColorDisableFg};
    border-color: ${ColorDisableBg};
    cursor: ${props => (props.isLoading ? 'wait' : 'not-allowed')};

    &:hover {
      box-shadow: none;
    }
  }

  .${appPrefix}-button__label,
    .${appPrefix}-button__spinner {
    position: relative;
    z-index: 2;
  }

  .${appPrefix}-button__label {
    display: inline-block;
    height: ${fontSize};
    opacity: 1;
  }
`;
