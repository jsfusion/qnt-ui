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

const variants = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = React.forwardRef(
  (
    {
      children,
      id,
      size = sizes.medium,
      variant = 'primary',
      isDisabled = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={{ size: size, variant: variant }}>
        <StyledButton
          id={id}
          className={`${classPrefix}-button`}
          disabled={isDisabled}
          variant={variant}
          onClick={onClick}
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
  variant: PropTypes.oneOf(Object.keys(variants)),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;
