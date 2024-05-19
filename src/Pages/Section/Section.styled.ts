import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  flex-wrap: wrap;
  flex-shrink: ;
`;

export const CarouselItem = styled.div`
  // Four items in a row */
  flex: 1 1 25%;
  box-sizing: border-box;
  padding: 10px;
  transition: transform 0.5s ease;

  @media (max-width: 1200px) {
    // Three items in a row
    padding: 7px;
    flex: 1 1 33.33%;
  }

  @media (max-width: 768px) {
    // Two items in a row
    padding: 5px;
    flex: 1 1 33.33%;
  }

  @media (max-width: 480px) {
    // One item in a row
    padding: 5px;
    flex: 1 1 50%;
  }
`;

export const CarouselBox = styled.div`
  background: #ddd;
  padding: 0;
  text-align: center;
  border: 1px solid #e2e6e9;
  background-color: #e3e7eb;
`;
