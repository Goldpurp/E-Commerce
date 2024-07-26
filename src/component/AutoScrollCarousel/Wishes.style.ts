import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
margin-top: 20px;
  width: 100%;
  overflow: hidden;
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-bottom: 10px;
`;

export const MarqueeContainer = styled.div`
 width: 200%;

`;

export const MarqueeContent = styled.div`
  display: flex;
  animation: ${marquee} 20s linear infinite;
`;

export const PictureWrapper = styled.div`
  position: relative;
  border: 1px solid #8d99ae;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
`;

export const PictureImage = styled.img`
  width: 100%;
  display: block;
  margin-right: 150px
`;

export const HashtagText = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const WordsText = styled.div`
  font-size: 14px;
`;
