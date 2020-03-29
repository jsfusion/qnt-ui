import styled, { css } from 'styled-components';
import { spacings } from '../../../settings';

const { spacing2 } = spacings;

export const StyledLabel = styled.label`
  display: block;
  margin: ${spacing2} 0;

  ${props => css`
    font-weight: ${props.fontWeight};
  `}

  ${props => props.isItalic && css`
    font-style: italic;
  `}
`;
