import { colorPrimary, colorBgSection } from "../../consts";
import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerAddCampaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #000000;
    opacity: 0.7;
    margin-bottom: 2rem;
  }

  > div:last-child {
    margin-top: 1rem;
  }
`

export const RegisterCampaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 1rem;  
  @media (max-width: 1200px) {
    gap: 5px;
  }

  > div:nth-child(-n + 2) {
    display: flex;
    gap: 1rem;
    width: 1000px;
    height: 95px;
    @media (max-width: 1200px) {
      flex-direction: column;
      width: 100%;
      height: 200px;
      gap: 5px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 50%;
      @media (max-width: 1200px) {
        width: 100%;
      }

      > label {
        font-size: 0.8rem;
        line-height: 1rem;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: #9FA2B4;
      }

      > input, > select {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height: 3rem;
        padding: 0.8rem 1rem;
        color: #4B506D;
      }
    }
  }

  > div:nth-child(2) {
    @media (max-width: 1200px) {
      height: 220px;
      gap: 0;

      > div:last-child {
        margin-top: 10px;
      }
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 95px;
    @media (max-width: 1200px) {
      min-height: 120px;
    }

    > label {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
      margin-bottom: 0.5rem;
    }

    > div {
      > input {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height: 3rem;
        padding: 0.8rem 1rem;
        color: #4B506D;
        width: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }

  > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    height: 140px;
    @media (max-width: 1200px) {
      height: 150px;
    }

    > label {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }

    > textarea {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 6rem;
      padding: 0.8rem 1rem;
      color: #4B506D;
      resize: none;
    }
  }

  > div:nth-child(5) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 6rem;
    gap: 6px;
    @media (max-width: 1200px) {
      margin-bottom: 10px;
    }

    > label, p {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }

    p {
      @media (max-width: 1200px) {
        text-align: center;
      }
    }
  }

  && section {
    background: #FCFDFE;
    border: 1px dashed black;
    height: 5rem;
    border-radius: 8px;
    width: 100%;
  }

  && section:hover {
    cursor: pointer;
    background: #f5f5f5fb;
  }

  && section > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100% !important;
  }

  && section img {
    width: 4rem;
    height: 4rem;
    clip-path: circle();
  }
`
export const ListTagsStyle = styled.div`
    && > ul:nth-child(2).active {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    width: 40%;
    max-height: 25rem;
    z-index: 1;
    overflow: auto;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    background: #ffffff;
  }
  && > ul:nth-child(2) li > span {
    display: flex;
    background: #ffffff;
    width: 100%;
    border-top: 1px solid #f4f4f4;
    padding: 0.5rem;
  }
  && > ul:nth-child(2) li > span:hover {
    cursor: pointer;
    background: ${colorBgSection};
  }
  && > div:nth-child(3) {
    display: flex;
    gap: 5px;
    max-width: 1000px;
    flex-wrap: wrap;
  }
  && > div:nth-child(3) > div > span {
    background: ${colorPrimary};
    color: white;
    padding: 0 8px;
    border-radius: 8px;
  }
  && > div > div > span > span:hover {
   cursor: pointer;
  }
`