import styled from "styled-components";


export const DonorsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DonorsList = styled.div`
  width: 400px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  && h2 {
    padding: 1rem 0;
  }
  && button {
    margin-top: 1rem;
  }
  @media(max-width: 768px) {
    max-width: 340px;
  }
`

export const DonorsListTitle = styled.h3`
  display: flex;
  justify-content: center ;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid #DFE0EB;
`

export const DonorsInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.5rem 1rem;
  width: 100%;
  gap: 1rem;
  border-bottom: 1px solid #DFE0EB;

  && img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    clip-path: circle();
  } 
`
