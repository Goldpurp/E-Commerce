import styled from "styled-components";

export const Image = styled.img`
  border: 0px;
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 50%;
  padding: 2px 5px 8px 5px;
  max-width: 50%;
  box-sizing: border-box;
  transition: transform 0.5s ease;

  @media (min-width: 500px) {
    flex: 1 25%;
    max-width: 25%;
  }
`;

export const CarouselBox = styled.div`
  padding: 0;
  cursor: pointer;
  background: #ddd;
  width: 100%;
  height: 200px;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
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