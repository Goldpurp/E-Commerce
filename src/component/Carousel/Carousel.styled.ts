import styled from "styled-components";

export const Container = styled.div`
  gap: 10px;
  display: flex;
  margin-left: 5px;
  overflow-x: auto;
  flex-wrap: nowrap;
  margin-bottom: 30px;
  align-items: center;
  justify-content: start;

  @media screen and (min-width: 769px) {
    gap: 12px;
  }

  @media screen and (min-width: 1148px) {
    gap: 15px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselCards = styled.div`
  width: 120px;
  height: 180px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #cec9cc;
  box-shadow: 2px 2px 5px 1px gray;

  @media screen and (min-width: 376px) {
    width: 140px;
    height: 210px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    height: 230px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    height: 250px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (min-width: 1148px) {
    width: 250px;
    height: 350px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductTitle = styled.p`
  width: 100px;
  color: #222831;
  font-size: 15px;
  overflow: hidden;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 376px) {
    width: 140px;
    font-size: 15px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    font-size: 16px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    font-size: 18px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    font-size: 20px;
  }

  @media screen and (min-width: 1148px) {
    width: 240px;
    font-size: 22px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;


export const ProductDetails = styled.p`
  width: 100px;
  color: #222831;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-optical-sizing: auto;
  /* font-family: "Josefin Sans", sans-serif; */
  
  @media screen and (min-width: 376px) {
    font-size: 13px;
    width: 140px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    font-size: 13px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    font-size: 15px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    font-size: 17px;
  }

  @media screen and (min-width: 1148px) {
    width: 240px;
    font-size: 19px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Productprice = styled.h5`
  width: 100%;
  margin: 5px 0;
  color: #386648;
  font-size: 14px;
  flex-wrap: wrap;
  letter-spacing: 0.70px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
