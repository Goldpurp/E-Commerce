import styled, { keyframes }  from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const SaleBanner = styled.div`
  color: white;
  height: 140px;
  display: flex;
  font-weight: bold;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #384655;
  font-family: Arial, sans-serif;

  @media screen and (min-width: 768px) {
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
  }

  @media screen and (min-width: 1440px) {
    height: 280px;
  }
`;

export const SummerSale = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscountText = styled.div`
  top: 7px;
  left: 7px;
  font-size: 20px;
  font-weight: 100;
  position: absolute;

  display: inline-block;
  animation: ${pulse} 1.5s infinite;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const SaleText = styled.h3`
  font-size: 40px;
  font-weight: 100;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 90px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;
