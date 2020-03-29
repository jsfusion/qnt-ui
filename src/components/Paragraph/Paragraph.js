import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { themeProps } from '../../settings';
import { StyledParagraph } from './styles/Paragraph.styles';

const { classPrefix } = themeProps;

const Paragraph = React.forwardRef(
  (
    {
      children,
      id,
      isBold = false,
      isItalic = false,
      isJustify = false,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={{}}>
          <StyledParagraph
            id={id}
            className={`${classPrefix}-paragraph`}
            isBold={isBold}
            isItalic={isItalic}
            isJustify={isJustify}
          >
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
  isJustify: PropTypes.bool,
}

export default Paragraph;
