import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const CarouselContainer = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  overflow: hidden;
  padding-left: 5px;
  margin-bottom: 10px;
  font-family: "Nunito", sans-serif;
  letter-spacing: normal;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 0;
  overflow-x: auto;
  margin-bottom: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 160px;
  height: 320px;
  flex: 0 0 auto;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 5px;
  position: relative;
  background: #f8f8f8;

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 350px;
  }

  @media screen and (min-width: 1024px) {
    width: 210px;
    height: 390px;
  }

  @media screen and (min-width: 1440px) {
    width: 250px;
    height: 490px;
  }
`;

export const Image = styled.img`
  border: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageBrace = styled.div`
  width: 100%;
  height: 72%;
  border-radius: 5px;
  background-color: #d8dad3;
  box-shadow: 1px 1px 5px 1px gray;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 73%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 78%;
  }
`;

export const Content = styled.div`
  padding: 7px;
`;

export const Title = styled.h3`
  font-size: 13px;
  padding: 3px 0;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 601px) {
    font-size: 18px;
  }

  @media screen and (min-width: 769px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1148px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  color: #666;
  font-size: 11px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 601px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Price = styled.div`
  margin: 8px 0;
  color: #2d6a4f;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    margin: 9px 0;
    font-size: 20px;
  }
`;

export const LikeItem = styled(MdOutlineFavoriteBorder)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 900ms;

  &:hover {
    color: #40434e;
  }

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;

export const CartItem = styled(GiShoppingCart)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 900ms;

  &:hover {
    color: #40434e;
  }

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;

export const ReactionsContainer = styled.div`
  gap: 10px;
  right: 7px;
  bottom: 12px;
  display: flex;
  position: absolute;

  @media screen and (min-width: 768px) {
    right: 10px;
    bottom: 15px;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
    right: 13px;
    bottom: 15px;
  }
`;
