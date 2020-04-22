import styled from 'styled-components';
import { InputGroup as BPInputGroup } from '@blueprintjs/core';
import { theme } from '../../../settings';

const { ColorBlack } = theme;

export const StyledSearchInput = styled(BPInputGroup)`
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
