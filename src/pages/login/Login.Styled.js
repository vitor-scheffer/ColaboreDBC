import styled from "styled-components";
import { colorPrimary } from '../../consts'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  > h3 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #9FA2B4;
    margin: 0;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    padding: 0 1rem;
    background: #ffffff;
    @media(max-width: 1200px) {
      width: 100vw;
      padding: 0 1rem;
    }
  }
    @media(max-width: 1200px) {
      && form {
        width: 100%;
      }
      && button {
        width: 100%;
      }
    }
`

export const BackgroundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  background: linear-gradient(to bottom right, #2A69BB, #B43E94);
  @media (max-width: 1200px) {
    display: none;
  }
`

export const LogoAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 10px;

  img {
    width: 150px;
    margin-bottom: 12px;
  }

  h2 {
    color: #A4A6B3;
    opacity: 0.7;
    letter-spacing: 0.4px;
    font-size: 32px;
    line-height: 24px;
  }
`

export const Signup = styled.small`
  color: ${colorPrimary};
  font-weight: 600;
  margin-top: 1.625rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 32px;
  width: 100%;

  && div:nth-child(2) {
    position: relative;
  }
  && div:nth-child(2) > svg {
    position: absolute;
    bottom: 20px;
    right: 10px;
    color: ${colorPrimary};
  }
  && svg:hover {
    cursor: pointer;
  }

  div:nth-child(-n + 2) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 70px;

    label {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }

    input {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 42px;
      padding: 11px 16px;
      color: #4B506D;
    };
  }
`

export const Errors = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
`