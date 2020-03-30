import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { themeProps } from '../../settings';
import { StyledLabel } from './styles/Label.styles';

const { classPrefix } = themeProps;

const fontWeights = {
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
  bold: 'bold',
  bolder: 'bolder',
};

const Label = React.forwardRef(
  (
    {
      children,
      id,
      fontWeight = '100',
      isItalic = false,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={{}}>
          <StyledLabel
            id={id}
            ref={ref}
            className={`${classPrefix}-label`}
            fontWeight={fontWeight}
            isItalic={isItalic}
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
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  isItalic: PropTypes.bool,
}

export default Label;
