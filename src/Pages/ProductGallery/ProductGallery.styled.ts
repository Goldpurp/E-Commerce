import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  letter-spacing: normal;
  font-family: "Nunito", sans-serif;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  transition: transform 0.6s ease;
`;

export const CarouselItem = styled.div`
  flex: 1 50%;
  display: flex;
  max-width: 50%;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 2px 5px 8px 5px;
  transition: transform 0.5s ease;

  @media (min-width: 500px) {
    flex: 1 25%;
    max-width: 25%;
  }
`;

export const CarouselBox = styled.div`
  padding: 0;
  width: 100%;
  height: 180px;
  cursor: pointer;
  background: #ddd;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;

  @media (min-width: 768px) {
    height: 220px;
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    height: 250px;
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    height: 300px;
    font-size: 15px;
  }

  @media (min-width: 1440px) {
    height: 350px;
    font-size: 15px;
  }
`;

export const Brace = styled.div`
  padding: 5px;
`;

export const Label = styled.p`
  font-size: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;
