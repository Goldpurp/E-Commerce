import styled from "styled-components";
import Banner from "../../../public/Images/CollectionBanner.jpg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin: 20px 0;
  align-items: center;
  object-fit: contain;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Banner});

  @media screen and (min-width: 500px) {
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    height: 370px;
  }

  @media screen and (min-width: 1024px) {
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    height: 650px;
  }
`;

export const Brace = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 3s ease-out;
  font-family: "Irish Grover", system-ui;

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
  text-shadow: 1px 1px 5px black;

  @media screen and (min-width: 500px) {
    font-size: 45px;
  }

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }
`;

export const Span = styled.span`
  color: #ffff;
  font-size: 20px;
  text-shadow: 1px 1px 5px black;

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

export const Button = styled.button`
  color: #ffff;
  font-size: 25px;
  cursor: pointer;
  margin-top: 10px;
  background: none;
  padding: 2px 8px;
  transition: 700ms;
  align-self: center;
  width: fit-content;
  border-radius: 7px;
  border: 1px solid #ffff;
  text-shadow: 1px 1px 5px black;

  @media screen and (min-width: 500px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 45px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }

  &:hover {
    color: #343a40;
    background: #dad7cd;
    border: 1px solid #343a40;
    text-shadow: 1px 1px 5px black;
  }
`;
