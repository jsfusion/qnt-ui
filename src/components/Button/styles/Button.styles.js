import styled from 'styled-components';
import { Button as BPButton } from '@blueprintjs/core';
import { appPrefix, theme } from '../../../settings';

const { ColorPrimary, ColorSuccess, ColorWarning, ColorDanger } = theme;

export const StyledButton = styled(BPButton)`
  &.${appPrefix}-button {
    outline: none;
  }

  &.${appPrefix}-button--primary {
    box-shadow: inset 0 0 0 1px ${ColorPrimary}, inset 0 -1px 0 ${ColorPrimary};
  }
  &.${appPrefix}-button--success {
    box-shadow: inset 0 0 0 1px ${ColorSuccess}, inset 0 -1px 0 ${ColorSuccess};
  }
  &.${appPrefix}-button--warning {
    box-shadow: inset 0 0 0 1px ${ColorWarning}, inset 0 -1px 0 ${ColorWarning};
  }
  &.${appPrefix}-button--danger {
    box-shadow: inset 0 0 0 1px ${ColorDanger}, inset 0 -1px 0 ${ColorDanger};
  }

  &.${appPrefix}-button--primary:hover {
    box-shadow: inset 0 0 0 1px ${ColorPrimary}, inset 0 -1px 0 ${ColorPrimary};
  }
  &.${appPrefix}-button--success:hover {
    box-shadow: inset 0 0 0 1px ${ColorSuccess}, inset 0 -1px 0 ${ColorSuccess};
  }
  &.${appPrefix}-button--warning:hover {
    box-shadow: inset 0 0 0 1px ${ColorWarning}, inset 0 -1px 0 ${ColorWarning};
  }
  &.${appPrefix}-button--danger:hover {
    box-shadow: inset 0 0 0 1px ${ColorDanger}, inset 0 -1px 0 ${ColorDanger};
  }

  &.${appPrefix}-button--loading {
    cursor: wait !important;
  }
`;
