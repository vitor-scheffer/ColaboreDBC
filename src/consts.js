import styled from "styled-components"

export const fontXl = 24;
export const fontLg = 19;
export const fontMd = 16;
export const fontSm = 14;

export const colorPrimary = '#2A69BB';
export const colorPrimaryDark = '#1d5399';
export const colorSecondary = '#363740';
export const colorHoverMenu = '#9FA2B4';
export const redColor = '#F12B2C';
export const colorActiveMenu = '#DDE2FF';
export const colorTittle = '#A4A6B3;';
export const colorInput = '#4B506D';
export const colorBackgroundInput = '#FCFDFE';
export const colorTittlePage = '#252733';
export const colorBgSection = '#F7F8FC';
export const colorWhite = '#FFFFFF';
export const colorBorder = '#DFE0EB'

export const Tittle = styled.h1(({color, paddingBottom}) => ({
  fontSize: fontXl,
  color: color ? color : colorTittlePage,
  paddingBottom: paddingBottom ? paddingBottom : ''
}));

export const Subtitle = styled.h2(({color, paddingBottom}) => ({
  fontSize: fontLg,
  color: color ? color : colorTittle,
  paddingBottom: paddingBottom ? paddingBottom : ''
}));

export const Text = styled.p(({color, fontSize, fontWeight}) => ({
  fontSize: fontSize ? fontSize : fontMd,
  color: color ? color : colorTittlePage,
  fontWeight: fontWeight ? fontWeight : 500
}));

export const TextSm = styled.span(({color, fontSize, fontWeight}) => ({
  fontSize: fontSize ? fontSize : fontSm,
  color: color ? color : colorInput,
  fontWeight: fontWeight ? fontWeight : 500,
}));

export const TextColor = styled.p(({fontSize, fontWeight}) => ({
  fontSize: fontSize ? fontSize : fontMd,
  fontWeight: fontWeight ? fontWeight : 500
}));