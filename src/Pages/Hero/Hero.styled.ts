import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  padding: 0 10px;
  position: relative;
  background-color: #eef0eb;
  justify-content: space-evenly;
`;

export const HeroItemBrace = styled.div`
  z-index: 1;
  left: 30px;
  top: 220px;
  display: flex;
  position: absolute;
  align-self: center;
  justify-content: left;

  @media screen and (min-width: 601px) {
    top: 330px;
    left: 40px;
  }

  @media screen and (min-width: 769px) {
    top: 400px;
    left: 40px;
  }

  @media screen and (min-width: 1025px) {
    top: 350px;
    left: 70px;
  }
`;

export const HeroImages = styled.img`
  right: 0;
  position: relative;

  @media screen and (max-width: 320px) {
    left: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media screen and (min-width: 769px) {
    width: 520px;
  }
`;

export const HeroImagesMini = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
      right: 0;
      width: 320px;
  }

  @media screen and (min-width: 500px) {
      right: 0;
      top: 210px;
      width: 160px;
      display: flex;
      position: absolute;
  }

  @media screen and (min-width: 600px) {
      top: 150px;
      width: 200px;
  }

  @media screen and (min-width: 601px) {
      top: 312px;
    width: 200px;
  }

  @media screen and (min-width: 651px) {
      top: 282px;
      width: 220px;
  }

  @media screen and (min-width: 769px) {
      top: 405px;
      width: 250px;
  }

  @media screen and (min-width: 1025px) {
      top: 300px;
      width: 320px;
  }

  @media screen and (min-width: 1161px) {
    right: 50px;
  }
`;
