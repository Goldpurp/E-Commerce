import styled from "styled-components";
import { GoDotFill } from "react-icons/go";

export const LineContainer = styled.div`
  margin: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  margin: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const HrLines = styled.hr`
  height: 3px;
  width: 150px;
  background-color: black;

  @media screen and (min-width: 500px) {
   width: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 265px;
  }


  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Dot = styled(GoDotFill)`
  margin: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 3px 0 5px 0;
  text-shadow: 1px 1px 5px black;
  font-family: "Concert One", sans-serif;

  @media screen and (min-width: 500px) {
    font-size: 35px;
  }

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }


  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
`;

export const Span = styled.span`
  letter-spacing: 5px;
  text-decoration: line-through wavy 2px;
`;

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
