import styled from 'styled-components'

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px;
  width: 550px !important;
  height: 400px !important;
  background-color: white;
  color: black;
  border-radius: 12px;
  text-align: center;
  && h1 {
    font-size: 28px;
    width: 100%;
    padding-top: 35px;
  }
  && p {
    width: 100%;
    font-size: 25px;
  }
`;