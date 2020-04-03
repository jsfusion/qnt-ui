import styled, { css } from 'styled-components';
import { Icon as BPIcon } from '@blueprintjs/core';

export const StyledIcon = styled(BPIcon)`
  && {
    ${props => css`
      width: ${props.iconSize}px;
      height: ${props.iconSize}px;
    `}
  }
`;
