import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 20px;
  text-align: center;
  position: relative;;
  align-items: center;
  background-color: #cbcbcb;
  font-family: "Lora", serif;
  justify-content: space-between;

  @media only screen and (min-width: 601px) {
    height: 91px;
  }
`;

export const MobileHeaderNavContainer = styled.div`
  width: 100%;
  height: 91px;
  display: flex;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: space-between;
  font-family: "Lora", serif;
`;

export const NavLogo = styled.div`
  display: flex;
  font-size: 12px;
  cursor: pointer;
  align-items: center;

  @media (min-width: 430px) {
    font-size: 22px;
  }
`;

export const Hamburger = styled.div`
  z-index: 2;
  @media only screen and (max-width: 600px) {
    display: flex;
  }

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

export const MenuOpen = styled(GiHamburgerMenu)`
  font-size: 25px;
  cursor: pointer;
`;

export const MenuClose = styled(MdClose)`
  font-size: 25px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
`;

export const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  margin-left: -10px;

  @media (min-width: 430px) {
    width: 75px;
    height: 75px;
  }
`;

export const LogoText = styled.h2`
  font-size: 20px;
  cursor: pointer;
  margin-left: -15px;
  font-family: cursive;

  @media only screen and (min-width: 601px) {
    font-size: 18px;
    margin-left: -10%;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 25px;
  }
`;

export const LogoText2 = styled.span`
  font-size: 12px;
  cursor: pointer;
  font-family: cursive;
`;

export const LoginFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTabs = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 601px) {
    gap: 5px;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    gap: 20px;
  }
`;

export const MobileMenu = styled.div<{ active: boolean }>`
  @media only screen and (max-width: 600px) {
    left: 0;
    top: 0;
    z-index: 2;
    width: 98vw;
    padding: 0 30px;
    height: 100vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffff;
    justify-content: flex-start;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    transform: ${({ active }) =>
      active ? "translateX(0%);" : "translateX(-100%);"};
    transition: transform 550ms ease-in-out;
  }

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

export const MobileMenuLines = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const MobileMenuLines2 = styled.div`
  padding: 10px 0;
`;

export const MobileMenuLoginStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`;

export const Span = styled.span`
  gap: 5px;
  margin: 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    color: gray;
  }
`;

export const Tabs = styled.p`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (min-width: 601px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 23px;
  }

  &:hover {
    color: #c4a163;
  }
`;

export const Cart = styled(BsCart4)`
  margin: 0 10px;
  cursor: pointer;
  font-size: 22px;

  @media only screen and (max-width: 600px) {
    margin: 0 5px;
  }
  @media only screen and (min-width: 601px) {
    font-size: 25px;
  }

  &:hover {
    color: gray;
  }
`;
