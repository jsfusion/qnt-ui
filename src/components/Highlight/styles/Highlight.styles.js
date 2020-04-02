import styled from 'styled-components';
import { appPrefix } from '../../../settings';

export const StyledHighlight = styled.span`
    background: ${props => props.highlightColor};
    color: ${props => props.color};
    padding: 0 2px;
    
    &.${appPrefix}-highlight--bold {
        font-weight: bold;
    }

    &.${appPrefix}-highlight--italic {
        font-style: italic;
    }
`;
