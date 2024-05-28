import styled from "styled-components";
export const SaleBanner = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #3c6e71;
  color: white;
  height: 140px;
  font-family: Arial, sans-serif;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    height: 190px;
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
  font-size: 20px;
  position: absolute;
  left: 7px;
  top: 7px;
  font-weight: 100;

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
