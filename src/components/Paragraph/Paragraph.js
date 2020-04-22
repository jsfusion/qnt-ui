import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { appPrefix } from '../../settings';
import { StyledParagraph } from './styles/Paragraph.styles';

const Paragraph = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      isBold = false,
      isItalic = false,
      isAssistive = false,
      isJustify = false,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-paragraph`]: true,
      [`${appPrefix}-paragraph--bold`]: isBold,
      [`${appPrefix}-paragraph--italic`]: isItalic,
      [`${appPrefix}-paragraph--assistive`]: isAssistive,
      [`${appPrefix}-paragraph--justify`]: isJustify,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledParagraph id={id} ref={ref} className={className} {...rest}>
          {children}
        </StyledParagraph>
      </ThemeProvider>
    );
  },
);

Paragraph.propTypes = {
  id: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  isAssistive: PropTypes.bool,
  isJustify: PropTypes.bool,
};

export default Paragraph;
