import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 100;

`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 180px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  z-index: 100;
  width: 100%;
`;

export const SearchBox = styled.div`
  height: auto;
  width: 80%;
  position: relative;

  @media only screen and (min-width: 1024px) {
    width: 50%;

  }
`;

export const SearchInput = styled.input`
  height: auto;
  width: 100%;
  outline: none;
  border: 1px solid #000;
  font-size: 15px;
  padding: 10px 5px 10px 40px;
  border-radius: 10px;
  background-color: #a5a5a5;

  ::placeholder {
    color: #9e9e9e;
  }

  @media only screen and (min-width: 1024px) {
    border: 1.6px solid #000;
    padding: 15px 5px 15px 40px;
    font-size: 17px;
  }
`;

export const SearchIcon = styled(IoSearchOutline)`
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  left: 10px;
  bottom: 10px;

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
    bottom: 16px;
  }
`;
