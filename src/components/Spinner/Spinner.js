import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledSpinner } from './styles/Spinner.styles';
import { appPrefix } from '../../settings';

const variants = {
  none: 'none',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

const Spinner = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      variant = variants.none,
      size = 50,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-spinner`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledSpinner
          id={id}
          ref={ref}
          className={className}
          intent={variant}
          size={size}
          {...rest}
        >
          {children}
        </StyledSpinner>
      </ThemeProvider>
    );
  },
);

Spinner.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
};

export default Spinner;
