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
    height: 8rem;
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
    height: 8rem;
    object-fit: cover;
  }
  
  && h2 {
    width: 200px;
    height: 1.625rem;
    background: linear-gradient(91.13deg, #181818 80%, rgba(24, 24, 24, 0) 99.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 130px;
    }
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
  && button {
    border: none;
    background: none;
    font-weight: 700;
    color: ${colorPrimary};
  }
  button:hover {
    color: ${colorPrimaryDark};
    cursor: pointer;
    text-decoration: underline;
  }
  && > div {
    padding: 0.625rem;
  }
  && footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 0.5rem;
  }
  && footer div {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0rem;
  }
  && footer div:nth-child(2) {
    padding: 0;
    height: 2px;
    background: linear-gradient(to bottom right, #2A69BB 0%, #B43E94 100%);
  }
  && p.ColorRed {
  color: red;
  }

  && p.ColorOrange {
  color: Orange;
  }

  && p.ColorGreen {
  color: rgb(6, 161, 6);
  }
`;

