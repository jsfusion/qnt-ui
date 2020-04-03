import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledHighlight } from './styles/Highlight.styles';
import { appPrefix } from '../../settings';

const currentHighlightColor = '#ffff00';
const currentColor = '#262626';

const Highlight = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      highlightColor = currentHighlightColor,
      color = currentColor,
      isBold = false,
      isItalic = false,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-highlight`]: true,
      [`${appPrefix}-highlight--bold`]: isBold,
      [`${appPrefix}-highlight--italic`]: isItalic,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledHighlight
          ref={ref}
          className={className}
          highlightColor={highlightColor}
          color={color}
          {...rest}
        >
          {children}
        </StyledHighlight>
      </ThemeProvider>
    );
  },
);

Highlight.propTypes = {
  id: PropTypes.string,
  highlightColor: PropTypes.string,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
};

export default Highlight;
