import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledImage } from './styles/Image.styles';
import { appPrefix } from '../../settings';

const Image = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-image`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledImage
          ref={ref}
          className={className}
          {...rest}
        >
          {children}
        </StyledImage>
      </ThemeProvider>
    );
  },
);

Image.propTypes = {
  id: PropTypes.string,
};

export default Image;
