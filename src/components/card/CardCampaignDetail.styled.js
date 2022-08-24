import styled from "styled-components";
import { colorPrimary, colorPrimaryDark } from '../../consts' 

export const CardContent = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  && > div.finished {
    background: #01220189;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18rem;
    padding: 0 !important;
  }
  && > div.finished > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000bc;
    width: 100%;
    height: 4rem;
    color: white
  }
  && img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
  }
  && > div {
    padding: 0.625rem;
  }
  && > div:nth-child(2) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  && > div:nth-child(2) div {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  && > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  && > div:nth-child(3) > span:nth-child(2) {
    display: flex;
    gap: 5px;
  }
  && > div:nth-child(3) > span:nth-child(2) > div {
    display: flex;
    gap: 5px;
  }
  && > div:nth-child(3) > span:nth-child(2) > div > span {
    background: ${colorPrimary};
    color: white;
    padding: 0 8px;
    border-radius: 8px;
    line-height: 17px
  }
  && > div:nth-child(4) > p:nth-child(2) {
    padding-top: 1rem;
  }
  && > div:nth-child(4) > p:last-child {
    padding-top: 0.5rem;
    min-height: 15rem;
  }
  && > div:nth-child(4) > div {
    padding: 0;
    height: 2px;
    background: linear-gradient(to bottom right, #2A69BB 0%, #B43E94 100%);
  }
`;