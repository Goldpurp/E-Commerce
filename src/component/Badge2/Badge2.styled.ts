import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin: 6px 0;
  height: 220px;
  display: flex;
  align-items: center;
  background-color: #edede9;
  justify-content: space-evenly;

  @media screen and (min-width: 376px) {
    height: 250px;
  }

  @media screen and (min-width: 601px) {
    height: 270px;
  }

  @media screen and (min-width: 769px) {
    width: 50vw;
    height: 250px;
  }

  @media screen and (min-width: 1148px) {
    height: 280px;
  }
`;

export const P = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-family: "Concert One", sans-serif;

  @media screen and (min-width: 376px) {
    font-size: 18px;
  }

  @media screen and (min-width: 500px) {
    font-size: 20px;
  }

  @media screen and (min-width: 601px) {
    font-size: 24px;
  }

  @media screen and (min-width: 769px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1148px) {
    font-size: 26px;
  }
`;

export const H1 = styled.h1`
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-family: "Julee", cursive;

  @media screen and (min-width: 376px) {
    font-size: 15px;
  }

  @media screen and (min-width: 500px) {
    font-size: 17px;
  }

  @media screen and (min-width: 601px) {
    font-size: 20px;
  }

  @media screen and (min-width: 769px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1148px) {
    font-size: 22px;
  }
`;

export const Button = styled.button`
  gap: 5px;
  width: 90px;
  height: 35px;
  padding: 5px;
  display: flex;
  outline: none;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  font-weight: 100;
  text-align: center;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: transparent;
  font-family: "Jolly Lodger", system-ui;

  @media screen and (min-width: 376px) {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }

  @media screen and (min-width: 500px) {
    width: 120px;
    height: 45px;
    font-size: 16px;
  }

  @media screen and (min-width: 601px) {
    width: 140px;
    height: 50px;
    font-size: 18px;
  }

  @media screen and (min-width: 769px) {
    width: 120px;
    height: 45px;
    font-size: 16px;
  }

  @media screen and (min-width: 1148px) {
    width: 140px;
    height: 50px;
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.96);
    border: 1px solid #bcb8b1;
    background-color: #edede9;
    transition: all 0.4s linear;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;

  @media screen and (min-width: 376px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 500px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 601px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (min-width: 769px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 1148px) {
    width: 320px;
    height: 320px;
  }
`;

export const BadgeItem = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const Items = styled.div`
  gap: 5px;
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
`;
