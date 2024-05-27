import styled from "styled-components";

export const TrendsBrace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  gap: 10px;
  display: flex;
  overflow-x: auto;
  text-align: start;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 20px 30px 20px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  `;

export const Buttons = styled.button`
  color: black;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  transition: 900ms;
  padding: 5px 15px;
  width: fit-content;
  border-radius: 30px;
  border: 1px solid #daddd8;
  font-family: "Montserrat", sans-serif;
  
  &:hover {
    border: 1px solid #b7b7a4;
  }
  
  @media screen and (min-width: 375px) {
    padding: 10px 15px;
  }

  @media screen and (min-width: 500px) {
    font-size: 10px;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 600;
    padding: 12px 18px;
  }
`;

export const TitleTrends = styled.h3`
  font-size: 35px;
  margin-left: 20px;
  font-weight: lighter;
  font-family: "Jomhuria", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
  @media screen and (min-width: 769px) {
    font-size: 52px;
  }
`;
