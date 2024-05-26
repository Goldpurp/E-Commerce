import styled from "styled-components";

// Main Container
export const Container = styled.div`
  display: flex;
  padding: 0px 80px;
  align-items: center;
  flex-direction: column;
  background-color: none;
  justify-content: center;

  @media screen and (min-width: 425px) {
    padding: 0px 150px;
  }

  @media screen and (min-width: 666px) {
    padding: 0px 150px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 200px;
  }

  @media screen and (min-width: 990px) {
    padding: 0px 270px;
  }
`;

// Decorative Container
export const DecorativeContainer = styled.div`
  display: flex;
  margin: 10px 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;

// Decorative Line
export const Line = styled.div`
  width: 70px;
  height: 4px;
  margin: 0 10px;
  color: transparent;
  background-color: #252422;
  animation: fadeIn 5s ease-out;
  background: linear-gradient(90deg, #252422 0%, #a39379 100%);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Styled Text
export const StyledText = styled.h1`
  z-index: 1;
  color: #333;
  font-size: 38px;
  position: relative;
  color: transparent;
  animation: fadeIn 2s ease-out;
  -webkit-background-clip: text;
  font-family: "Playfair Display", serif;
  background: linear-gradient(90deg, #252422 10%, #a39379 100%);
  
  @media screen and (min-width: 560px) {
    font-size: 55px;
  }

  @media screen and (min-width: 768px) {
    font-size: 75px;
  }

  @media screen and (min-width: 990px) {
    font-size: 90px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

