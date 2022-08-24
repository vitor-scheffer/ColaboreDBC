import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2.25rem 2.25rem 2.25rem;
  && input {
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    border-radius: 8px;
    height: 42px;
    padding: 11px 16px;
    color: #4B506D;
    width: 100%;
  }
  && > div {
    display: flex;
    width: 100%;
    gap: 2.5rem;
    padding-top: 0.625rem;
  }
`;