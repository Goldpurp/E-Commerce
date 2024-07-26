import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #fff;
  position: relative;
  width: 208.09px; /* Adjust as per your design */
  height: 298.68px; /* Adjust as per your design */

  @media (min-width: 768px) {
    width: 317px; /* Adjust as per your design */
    height: 455px; /* Adjust as per your design */
  }
`;

export const StyledBox = styled.div`
  /* border-radius: 150px; */
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #9f7e69;
  background-color: rgba(255, 230, 214, 1);

  &::before {
    content: '';
    position: absolute;
    background-size: cover;
    background-image: inherit;
    backdrop-filter: blur(8px); /* Adjust the blur strength as needed */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 2px 10px 2px #dee2e6;
  border-radius: 150px; /* Adjust as per your design */
`;

export const TextContainer = styled.div`
  left: 50%;
  top: 7%;
  width: 80%;
  position: absolute;
  text-align: center;
  transform: translate(-50%, 0%);
`;

export const HashtagText = styled.p`
  color: #000;
  font-weight: 500;
  font-family: 'Gopher', sans-serif;
  white-space: pre-wrap;
  word-break: break-word;
  padding-top: 50px; /* Adjust as per your design */
  font-size: 16px; /* Adjust as per your design */

  @media (min-width: 768px) {
    padding-top: 100px; /* Adjust as per your design */
    font-size: 23px; /* Adjust as per your design */
  }
`;

export const WordsText = styled.p`
  font-weight: 400;
  color: #000;
  text-align: center;
  font-family: 'Gopher', sans-serif;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 13px; /* Adjust as per your design */

  @media (min-width: 768px) {
    font-size: 16px; /* Adjust as per your design */
  }
`;