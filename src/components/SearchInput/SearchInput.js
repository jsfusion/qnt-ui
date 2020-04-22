import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledSearchInput } from './styles/SearchInput.styles';
import { appPrefix } from '../../settings';

const SearchInput = React.forwardRef(
  (
    {
      children,
      className: customClassName,
      id,
      value,
      placeholder = 'Search',
      onChange,
      ...rest
    },
    ref,
  ) => {
    const className = cx({
      [`${appPrefix}-searchinput`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{}}>
        <StyledSearchInput
          id={id}
          ref={ref}
          className={className}
          type="search"
          leftIcon="search"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        >
          {children}
        </StyledSearchInput>
      </ThemeProvider>
    );
  },
);

SearchInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
