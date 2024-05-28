import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";


export const Button = styled.button`
  border: none;
  color: #ffff;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  background: none;
  font-weight: 600;
  transition: 400ms;
  align-self: center;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }

  &:hover {
    color: #dee2e6;
    border-bottom: 1px solid #dee2e6;
  }
`;

export const Arrow = styled(IoMdArrowDropright)`
  color: #ffff;
  font-size: 22px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }

  &:hover {
    color: #dee2e6;
  }
`;


