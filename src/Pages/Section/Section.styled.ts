import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.6s ease;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const CarouselItem = styled.div`
  flex: 25%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  transition: transform 0.5s ease;

  @media (max-width: 1200px) {
    padding: 7px;
    flex: 1 33.33%;
    max-width: 33.33%;
  }

  @media (max-width: 768px) {
    padding: 5px;
    flex: 1 33.33%;
    max-width: 33.33%;
  }

  @media (max-width: 480px) {
    padding: 5px;
    flex: 1 50%;
    max-width: 50%;
  }
`;

export const CarouselBox = styled.div`
  background: #ddd;
  padding: 0;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;
`;


export const Label = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;

export const Price = styled.h5`
  font-size: 16px;
  flex-wrap: wrap;
  width: 100%;
  color: #386648;
  margin: 5px 0;
  letter-spacing: 0.70px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const OldPrice = styled.span`
  font-size: 14px;
  flex-wrap: wrap;
  width: 100%;
  color: #780000;
  margin: 2px 15px;
  text-decoration: line-through;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Bonus = styled.p`
  font-size: 10px;
  flex-wrap: wrap;
  width: 100%;
  color: #9D2226;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;


