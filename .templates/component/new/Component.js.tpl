---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { Styled<%= name %> } from './styles/<%= name %>.styles';
import { appPrefix } from '../../settings';

const <%= name %> = React.forwardRef(
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
      [`${appPrefix}-<%= h.changeCase.lower(name) %>`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <Styled<%= name %>
          id={id}
          ref={ref}
          className={className}
          {...rest}
        >
          {children}
        </Styled<%= name %>>
      </ThemeProvider>
    );
  },
);

<%= name %>.propTypes = {
  id: PropTypes.string,
};

export default <%= name %>;
