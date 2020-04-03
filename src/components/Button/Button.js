import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledButton } from './styles/Button.styles';
import { appPrefix } from '../../settings';

const textAlignments = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const buttonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const variants = {
  none: 'none',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

const Button = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      isActive = false,
      alignText = textAlignments.center,
      hasFullWidth = false,
      isLarge = false,
      isSmall = false,
      isMinimal = false,
      isLoading = false,
      hasOutline = false,
      iconLeft,
      iconRight,
      type = buttonTypes.button,
      variant = variants.none,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-button`]: true,
      [`${appPrefix}-button--primary`]: variant === variants.primary && !hasOutline,
      [`${appPrefix}-button--success`]: variant === variants.success && !hasOutline,
      [`${appPrefix}-button--warning`]: variant === variants.warning && !hasOutline,
      [`${appPrefix}-button--danger`]: variant === variants.danger && !hasOutline,
      [`${appPrefix}-button--loading`]: isLoading,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledButton
          id={id}
          ref={ref}
          className={className}
          active={isActive}
          alignText={alignText}
          fill={hasFullWidth}
          large={isLarge}
          small={isSmall}
          minimal={isMinimal}
          loading={isLoading}
          outlined={hasOutline}
          icon={iconLeft}
          rightIcon={iconRight}
          type={type}
          intent={variant}
          onClick={onClick}
          {...rest}
        >
          <span className={`${appPrefix}-button__label`}>{children}</span>
        </StyledButton>
      </ThemeProvider>
    );
  },
);

Button.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.bool,
  alignText: PropTypes.oneOf(Object.keys(textAlignments)),
  hasFullWidth: PropTypes.bool,
  isLarge: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMinimal: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasOutline: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  onClick: PropTypes.func,
};

export default Button;
