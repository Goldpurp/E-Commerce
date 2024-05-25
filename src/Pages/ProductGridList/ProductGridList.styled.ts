import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  transition: transform 0.6s ease;
`;

export const CarouselItem = styled.div`
  flex: 1 50%;
  padding: 5px;
  max-width: 50%;
  box-sizing: border-box;
  transition: transform 0.5s ease;

  @media (min-width: 480px) {
    flex: 1 33.33%;
    max-width: 33.33%;
  }

  @media (min-width: 1318px) {
    flex: 1 25%;
    padding: 10px;
    max-width: 25%;
  }
`;

export const CarouselBox = styled.div`
  padding: 0;
  cursor: pointer;
  background: #ddd;
  position: relative;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;
`;

export const Brace = styled.div`
  padding: 5px;
`;

export const Label = styled.p`
  width: 100%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;

export const Price = styled.h5`
  width: 100%;
  margin: 5px 0;
  color: #386648;
  font-size: 13px;
  flex-wrap: wrap;
  letter-spacing: 0.7px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const OldPrice = styled.span`
  width: 100%;
  color: #780000;
  font-size: 11px;
  flex-wrap: wrap;
  margin: 2px 10px;
  text-decoration: line-through;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

export const Bonus = styled.p`
  width: 100%;
  color: #9d2226;
  font-size: 9px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

export const CarouselBtnBrace = styled.div`
  display: flex;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;
`;

export const CarouselBtn = styled.button`
  color: #ffff;
  width: 385px;
  height: 48px;
  font-size: 13px;
  cursor: pointer;
  transition: 700ms;
  border-radius: 30px;
  background-color: #000;

  @media (min-width: 768px) {
    width: 228px;
  }

  &:hover {
    color: #daddd8;
    background-color: #1c1c1c;
  }
`;

export const ShopItemBag = styled(HiOutlineShoppingBag)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 500ms;

  @media (min-width: 1440px) {
    width: 35px;
    height: 35px;
  }
`;

export const ShopItemBagBrace = styled.div`
  right: 5px;
  bottom: 7px;
  width: 35px;
  height: 35px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  @media (min-width: 1440px) {
    right: 10px;
    width: 45px;
    height: 45px;
    bottom: 12px;
  }
`;
