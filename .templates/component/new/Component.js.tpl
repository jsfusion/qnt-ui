---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Styled<%= name %> } from './styles/<%= name %>.styles';
import { themeProps } from '../../settings';

const { classPrefix } = themeProps;

const <%= name %> = React.forwardRef(
  (
    {
      children,
      id,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={{}}>
        <Styled<%= name %>
          ref={ref}
          className={`${classPrefix}-<%= h.changeCase.lower(name) %>`}
          {...rest}
        >
          {children}
        </Styled<%= name %>>
      </ThemeProvider>
    )
  }
)

<%= name %>.propTypes = {
  id: PropTypes.string,
}

export default <%= name %>;
