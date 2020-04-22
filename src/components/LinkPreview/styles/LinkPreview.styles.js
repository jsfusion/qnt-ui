import styled from 'styled-components';
import { appPrefix, theme } from '../../../settings';

const {
  ColorLightGray30L,
  ColorDarkGray20L,
  ColorDisabledBackground,
  ColorDisabled,
  ColorHeading,
  TypographySize2,
  TypographySize3,
  TypographyWeightBold,
} = theme;

export const StyledLinkPreview = styled.a`
  display: flex;
  height: 100px;
  width: 100%;
  max-width: ${props => !props.isFullWidth && '400px'};
  background: ${ColorLightGray30L};
  border-radius: 5px;
  color: ${ColorHeading};
  text-decoration: none;

  :hover {
    color: ${ColorHeading};
    text-decoration: none;
  }

  &.${appPrefix}-linkpreview--loading {
    justify-content: center;
    align-items: center;
  }

  &.${appPrefix}-linkpreview--no-preview {
    justify-content: center;
    align-items: center;
    font-size: ${TypographySize3};
    color: ${ColorDisabled};
    background: ${ColorDisabledBackground};
    word-break: break-all;
    padding: 10px;
  }

  .${appPrefix}-linkpreview__link {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .${appPrefix}-linkpreview__image {
    height: 100px;
    width: 100px;
    min-width: 100px;
    background: url(https://via.placeholder.com/100x100.png?text=!);

    & img {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }

  .${appPrefix}-linkpreview--info__wrapper {
    & .${appPrefix}-linkpreview__title {
      padding: 3px 5px 0 5px;
      font-size: ${TypographySize3};
      font-weight: ${TypographyWeightBold};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & .${appPrefix}-linkpreview__description {
      padding: 2px 5px 0 5px;
      font-size: ${TypographySize2};
      color: ${ColorDarkGray20L};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
