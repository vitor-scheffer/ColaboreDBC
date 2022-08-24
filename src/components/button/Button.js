import styled from "styled-components";
import { colorPrimary, colorWhite } from '../../consts'

export const Button = styled.button(({width, background, border, padding, marginLeft, color}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: width ? width : 130,
  padding: padding ? padding : 13,
  marginLeft: marginLeft ? marginLeft : '',
  color: color ? color : colorWhite,
  background: background ? background : colorPrimary,
  borderRadius: 8,
  border: border ? border : `1px solid ${colorPrimary}`
}));