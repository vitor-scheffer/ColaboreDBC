import styled from "styled-components"
import { colorPrimary, colorBgSection } from "../../consts";

export const FilterMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 1.5rem;
  && button.active {
    background: linear-gradient(to bottom right, #2A69BB, #B43E94);
    border: ${colorPrimary};
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 0.5rem;
    && button {
      width: 180px;
      height: 25px;
    }
  }
`;

export const UserCampaignFilter = styled.div`
    display: flex;
    height: 3.125rem;
    align-items: end;
    width: 100%;
  && button.left {
    border-top-left-radius: 8px;
  }
  && button.right {
    border-top-right-radius: 8px;
  }
  && button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    width: 240px;
    border: 1px solid #f4f4f4;
    height: 40px;
    background: #FFFFFF;
    border-bottom: 0px;
    @media(max-width: 768px) {
      width: 165px;
    }
  }
  && button.active:hover, button.active, button:hover {
    height: 50px;
    color: #ffffff;
    background: linear-gradient(to bottom right, #2A69BB, #B43E94);
    border-color: var(--color-blue);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
  }
  
  && button:hover {
    background: ${colorPrimary};
  }

  && button:disabled:hover {
    cursor: default !important;
    height: 40px;
    background: #FFFFFF !important;
    color: #0000004e !important;
    border: none;
  }
`;

export const ActiveTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  background: linear-gradient(0deg, #F7F8FC 85%, #FFFFFF 100%);
  border-top: 1px solid #f4f4f4;
`;

export const FilterTags = styled.div`
position: relative;
padding-bottom: 1.5rem;
 && input {
  background: #FCFDFE;
  width: 100%;
  border: 1px solid #F0F1F7;
  border-radius: 8px;
  height: 3rem;
  padding: 0.8rem 1rem;
  color: #4B506D;
 }
 && input:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${colorPrimary};
 }
 && svg {
  color: ${colorPrimary};
  font-size: 1.5rem;
  position: absolute;
  top: 0.7rem;
  right: 1rem;
 }
`;

export const TagsContainer = styled.div`
  && > ul:nth-child(2).active {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    width: 80%;
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
    margin-top: 0.5rem;
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
`;