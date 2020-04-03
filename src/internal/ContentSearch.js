import React from 'react';
import styled from 'styled-components';
import { theme } from '../settings';
import { InputGroup as BPInputGroup } from '@blueprintjs/core';

const { ColorBlack } = theme;

const StyledContentSearch = styled(BPInputGroup)`
  display: inline-block;
  background: transparent;
  max-width: 340px;
  width: 100%;
  height: '36px';

  input[type='search'] {
    border-radius: 5px;
  }

  input[type='search']:focus {
    box-shadow: 1px 1px 5px -2px ${ColorBlack};
  }
`;

const ContentSearch = ({ value, onChange, ...rest }) => {
  return (
    <StyledContentSearch
      id="internal-search-input"
      type="search"
      leftIcon="search"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default ContentSearch;
