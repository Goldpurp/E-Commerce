import styled from "styled-components";

export const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  transition: transform 0.6s ease;
`;

export const CarouselItem = styled.div`
  flex: 25%;
  padding: 10px;
  max-width: 100%;
  box-sizing: border-box;
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
    flex: 1 50%;
    padding: 5px;
    max-width: 50%;
  }
`;

export const CarouselBox = styled.div`
  padding: 0;
  background: #ddd;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;
`;


export const Label = styled.p`
  width: 100%;
  font-size: 14px;
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
  font-size: 16px;
  flex-wrap: wrap;
  letter-spacing: 0.70px;

  @media (min-width: 768px) {
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
  width: 100%;
  color: #9D2226;
  font-size: 10px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;


