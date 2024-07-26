import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
  margin-top: 20px;

  @media only screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const HeaderText = styled.h1`
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  margin: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SearchBox = styled.div`
  height: auto;
  width: 80%;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const SearchInput = styled.input`
  height: auto;
  width: 100%;
  outline: none;
  border: 1px solid #000;
  font-size: 17px;
  padding: 10px 10px 10px 40px;
  border-radius: 5px;
  background-color: linear-gradient(
    360deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const SearchIcon = styled(IoSearchOutline)`
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  height: auto;
  position: relative;
`;

export const PopularSearchLabel = styled.h3`
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const PopularSearchItems = styled.p`
  padding: 5px;
  font-size: 15px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  &:hover {
    border: 1px solid #ced4da;
    background-color: #f8f9fa;
  }
`;

export const CustomerSupportBrace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 350px;
  background-color: #f8f9fa;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    height: 450px;
  }
`;

export const HeaderTextHelp = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;

  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const BottomTextHelp = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  margin-top: 10px;
  width: 80%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const HelpImg = styled.img`
  margin-top: 20px;
  width: 100px;
  height: 100px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    width: 150px;
    height: 150px;
  }
`;
export const HelpButton = styled.button`
  font-size: 13px;
  margin-top: 20px;
  cursor: pointer;
  width: 150px;
  height: 40px;

  @media only screen and (min-width: 768px) {
    width: 165px;
    height: 40px;
    font-size: 16px;
    margin-top: 10px;
  }

  &:hover {
    border: 1px solid #ced4da;
  }
`;
