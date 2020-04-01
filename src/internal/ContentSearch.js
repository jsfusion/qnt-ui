import React from 'react';
import styled from 'styled-components';
import { colors} from '../settings';
import { InputGroup as BPInputGroup } from '@blueprintjs/core';

const { rag: { red: { ColorRedLight, ColorRedLighter } } } = colors;

const StyledContentSearch = styled(BPInputGroup)`
  display: inline-block;
  background: transparent;
  max-width: 340px;
  width: 100%;
  height: '36px';

  #internal-search-input:focus {
    box-shadow: 0 0 0 2px ${ColorRedLight}, 
      0 0 0 3px ${ColorRedLighter}, 
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
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
