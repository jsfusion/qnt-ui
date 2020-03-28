import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledHeading4, StyledHeading5, StyledHeading6 } from './styles/Heading.styles';
import { themeProps } from '../../settings';
const {
  classPrefix
} = themeProps;
const types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};
const Heading = React.forwardRef(({
  children,
  id,
  type = types.h3,
  ...rest
}) => {
  return React.createElement(ThemeProvider, {
    theme: {
      type: type
    }
  }, type === types.h1 && React.createElement(StyledHeading1, {
    id: id,
    className: `${classPrefix}-heading`
  }, React.createElement("span", {
    className: `${classPrefix}-heading__label`
  }, children)), type === types.h2 && React.createElement(StyledHeading2, {
    id: id,
    className: `${classPrefix}-heading-h2`
  }, React.createElement("span", {
    className: `${classPrefix}-heading--h2__label`
  }, children)), type === types.h3 && React.createElement(StyledHeading3, {
    id: id,
    className: `${classPrefix}-heading-h3`
  }, React.createElement("span", {
    className: `${classPrefix}-heading--h3__label`
  }, children)), type === types.h4 && React.createElement(StyledHeading4, {
    id: id,
    className: `${classPrefix}-heading-h4`
  }, React.createElement("span", {
    className: `${classPrefix}-heading--h4__label`
  }, children)), type === types.h5 && React.createElement(StyledHeading5, {
    id: id,
    className: `${classPrefix}-heading-h5`
  }, React.createElement("span", {
    className: `${classPrefix}-heading--h5__label`
  }, children)), type === types.h6 && React.createElement(StyledHeading6, {
    id: id,
    className: `${classPrefix}-heading-h6`
  }, React.createElement("span", {
    className: `${classPrefix}-heading--h6__label`
  }, children)));
});
Heading.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types))
};
export default Heading;