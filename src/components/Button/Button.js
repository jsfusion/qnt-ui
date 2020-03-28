import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StyledButton } from './styles/Button.styles';
import { themeProps } from '../../settings';

const { classPrefix } = themeProps;

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const varients = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

const Button = React.forwardRef(
  (
    {
      children,
      id,
      size = sizes.small,
      varient = 'primary',
      ...rest
    },
  ) => {
    return (
      <ThemeProvider theme={{ size: size, varient: varient }}>
        <StyledButton
          id={id}
          className={`${classPrefix}-button`}
        >
          <span className={`${classPrefix}-button__label`}>{children}</span>
        </StyledButton>
      </ThemeProvider>
    );
  },
);

Button.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  varient: PropTypes.oneOf(Object.keys(varients)),
}

export default Button;
