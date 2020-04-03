import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledIcon } from './styles/Icon.styles';
import { appPrefix } from '../../settings';

const Icon = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      icon,
      size = 16,
      color = 'currentColor',
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-icon`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledIcon
          ref={ref}
          className={className}
          icon={icon}
          color={color}
          iconSize={size}
          {...rest}
        />
      </ThemeProvider>
    );
  },
);

Icon.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
