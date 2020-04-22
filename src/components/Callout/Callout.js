import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledCallout } from './styles/Callout.styles';
import { appPrefix } from '../../settings';

const variants = {
  none: 'none',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

const Callout = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      icon,
      variant = variants.none,
      title,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-callout`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledCallout
          id={id}
          ref={ref}
          className={className}
          intent={variant}
          icon={icon}
          title={title}
          {...rest}
        >
          {children}
        </StyledCallout>
      </ThemeProvider>
    );
  },
);

Callout.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  title: PropTypes.string,
};

export default Callout;
