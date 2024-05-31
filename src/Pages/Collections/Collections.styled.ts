import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 5px 0;
  object-fit: cover;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    margin: 10px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Brace = styled.div`
  bottom: 25%;
  padding: 7px;
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 3s ease-out;
  background: linear-gradient(160deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0) 100%);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const H1 = styled.h1`
  color: #ffff;
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;

  @media screen and (min-width: 500px) {
    font-size: 45px;
  }

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 70px;
    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 80px;
    line-height: 90px;
  }
`;

export const Span = styled.span`
  color: #ffff;
  font-size: 20px;
  font-weight: 600;

  @media screen and (min-width: 500px) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 35px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 42px;
  }
`;
