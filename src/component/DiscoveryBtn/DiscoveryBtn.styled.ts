import styled from "styled-components";

export const Container = styled.div`
  gap: 8px;
  display: flex;
  max-width: 220px;
  flex-direction: column;
  animation: fadeIn 8s ease-out;

  @media screen and (min-width: 768px) {
    max-width: 320px;
  }

  @media screen and (min-width: 1025px) {
    max-width: 450px;
  }


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

export const P = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1025px) {
    font-size: 35px;
  }
`;

export const Button = styled.button`
  gap: 7px;
  width: 140px;
  height: 45px;
  outline: none;
  display: flex;
  color: #000000;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: transparent;
  font-family: "Inknut Antiqua", serif;

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 55px;
    font-size: 15px;
  }

  @media screen and (min-width: 1025px) {
    width: 200px;
    height: 70px;
    font-size: 18px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.96);
    border: 1px solid #bcb8b1;
    background-color: #edede9;
    transition: all 0.4s linear;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Irish Grover", system-ui;

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }

  @media screen and (min-width: 1025px) {
    font-size: 65px;
  }
`;
