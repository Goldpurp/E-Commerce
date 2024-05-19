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
  }

  @media (max-width: 768px) {
    padding: 5px;
    flex: 1 33.33%;
  }

  @media (max-width: 480px) {
    padding: 5px;
    flex: 1 50%;
  }
`;

export const CarouselBox = styled.div`
  background: #ddd;
  padding: 0;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;
`;
