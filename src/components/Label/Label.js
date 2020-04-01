import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { appPrefix } from '../../settings';
import { StyledLabel } from './styles/Label.styles';

const Label = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      isBold = false,
      isItalic = false,
      isAssistive = false,
      ...rest
    },
    ref
  ) => {
    const className = cx({
      [`${appPrefix}-label`]: true,
      [`${appPrefix}-label--bold`]: isBold,
      [`${appPrefix}-label--italic`]: isItalic,
      [`${appPrefix}-label--assistive`]: isAssistive,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
          <StyledLabel
            id={id}
            ref={ref}
            className={className}
            {...rest}
          >
            {children}
          </StyledLabel>
      </ThemeProvider>
    );
  },
);

Label.propTypes = {
  id: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  isAssistive: PropTypes.bool,
}

export default Label;
