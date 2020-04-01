import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledButton } from './styles/Button.styles';
import { appPrefix } from '../../settings';
import Icon from '../Icon';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const variants = {
  primary: 'primary',
  secondary: 'secondary',
};

const iconSizes = {
  small: 12,
  medium: 14,
  large: 16,
};

const Button = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      size = sizes.medium,
      variant = 'primary',
      isDisabled = false,
      isLoading = false,
      iconLeft,
      iconRight,
      onClick,
      ...rest
    },
    ref
  ) => {
    const className = cx({
      [`${appPrefix}-button`]: true,
      [`${appPrefix}-button--loading`]: isLoading,
      [customClassName]: !!customClassName,
    });

    const iconSize = iconSizes[size] || size;

    return (
      <ThemeProvider theme={{ size: size, variant: variant }}>
        <StyledButton
          id={id}
          ref={ref}
          className={className}
          disabled={isDisabled || isLoading}
          aria-disabled={isDisabled || isLoading}
          isLoading={isLoading}
          variant={variant}
          onClick={onClick}
          {...rest}
        >
          {iconLeft && (
            <span
              className={`${appPrefix}-button__icon ${appPrefix}-button__icon--left`}
            >
              <Icon icon={iconLeft} size={iconSize} />
            </span>
          )}
          <span className={`${appPrefix}-button__label`}>{children}</span>
          {iconRight && (
            <span
              className={`${appPrefix}-button__icon ${appPrefix}-button__icon--right`}
            >
              <Icon icon={iconRight} size={iconSize} />
            </span>
          )}
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
  isLoading: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
