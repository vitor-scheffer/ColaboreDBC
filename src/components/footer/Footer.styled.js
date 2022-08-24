import styled from "styled-components";
import { colorWhite } from '../../consts'

export const FooterContainer = styled.header`
  background: linear-gradient(to top left, #2A69BB, #B43E94);
  color: ${colorWhite};
  height: 5rem;
  && > div {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1400px;
  } && div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  && > div > div:nth-child(1):hover {
    cursor: pointer;
    opacity: 0.95;
  }
  && img {
    width: 44px;
    clip-path: circle();
  }
  && p:last-child {
    @media (max-width: 770px) {
      display: none;
    }
  }
`;