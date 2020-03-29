import styled, { css } from 'styled-components';
import { spacings } from '../../../settings';

const { spacing2 } = spacings;

export const StyledParagraph = styled.p`
  display: block;
  margin: ${spacing2} 0;

  ${props => props.isBold && css`
    font-weight: bold;
  `}

  ${props => props.isItalic && css`
    font-style: italic;
  `}

  ${props => props.isJustify && css`
    text-align: justify;
  `}
`;
