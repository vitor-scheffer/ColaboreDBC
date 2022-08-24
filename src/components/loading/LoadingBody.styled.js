import styled from "styled-components";
import { colorPrimary, colorBgSection } from '../../consts'

export const PageLoad = styled.div`
  height: 26rem;
  width: 100%;
  background-color: ${colorBgSection};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.div`
  display: flex;
  && div {
    width: 50px;
    height: 50px;
    background-color: ${colorPrimary};
    margin: 15px;
    border-radius: 50%;
    animation: anima 0.3s ease-in-out infinite alternate;
  }

  @keyframes anima{
    from{
      transform: translateY(-100%);
    }to{
      transform: translateY(100%);
    }
  }
`;