import styled from "styled-components";
import { FaShare } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 830px) {
    padding: 30px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageSection = styled.div`
  gap: 3px;
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 450px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 550px;
  }

  @media (min-width: 1024px) {
    height: 750px;
  }
`;

export const InfoSection = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 17px;
  padding: 3px 0;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media(min-width: 768px) {
    font-size: 20px;
  }
`;

export const Price = styled.p`
  margin: 8px 0;
  color: #2d6a4f;
  font-size: 18px;
  font-weight: bold;
  
  @media (min-width: 830px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const OldPrice = styled.span`
  width: 100%;
  color: #780000;
  font-size: 14px;
  flex-wrap: wrap;
  margin: 2px 10px;
  text-decoration: line-through;

  @media (min-width: 830px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: #666;
  font-size: 14px;

  @media (min-width: 830px) {
    font-size: 16px;
  }
`;

export const SizeSelect = styled.div`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  `;

export const Size = styled.h3`
  font-size: 15px;
  padding: 10px 0;

  @media (min-width: 830px) {
    font-size: 17px;
  }
  `;

export const SizesTabs = styled.span`
  font-size: 12px;
  padding: 3px 7px;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 5px;

  @media (min-width: 830px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  &:hover {
    border: 2px solid #c4a163;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #000; 
  color: #000;

  &:hover {
    border: 1px solid #495057;
    background-color: #e0e0e0;
  }
`;

export const QuantityBrace = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #d0d0d0;

  @media (min-width: 830px) {
    font-size: 17px;
  }
`;

export const AddToCartButton = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 10px 30px;
  border-radius: 5px;
  padding: 10px 23px;
  background-color: #2d6a4f;
  transition: background-color 0.3s;

  @media (min-width: 830px) {
    padding: 12px 30px;
  }

  &:hover {
    background-color: #3c6e71;
  }
`;

export const ButtonCount = styled.button`
  background-color: #f0f0f0;
  border: none;
  color: #000;
  outline: none;
  padding: 8px 12px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (min-width: 830px) {
    font-size: 20px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Favorite = styled(MdFavoriteBorder)`
  width: 20px;
  height: 20px;
  color: #000;
  cursor: pointer;
`;

export const Details = styled.h3`
  color: #000;
  font-size: 15px;
  padding: 10px 0;

  @media (min-width: 830px) {
    font-size: 17px;
  }
`;

export const Share = styled(FaShare)`
  width: 20px;
  height: 20px;
  color: #343a40;
  cursor: pointer;
`;

export const ShareBrace = styled.div`
  display: flex;
  justify-content: space-between;
`;
