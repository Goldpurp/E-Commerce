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
  background-color: none;
  padding: 20px 0;
  margin-bottom: 10px;
`;

export const MarqueeContainer = styled.div`
 width: 200%;

`;

export const MarqueeGradientFilter = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.625;
  border-radius: 10px;
  position: absolute;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2196) 0%, rgba(0, 0, 0, 0) 100%);
;

`;

export const MarqueeContent = styled.div`
  display: flex;
  animation: ${marquee} 20s linear infinite;
  position: relative;
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
