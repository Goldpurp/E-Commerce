type sectionProp = {
  isOpenItem: boolean;
};

import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  padding: 0 20px;
  font-weight: 300;
  text-align: center;
  position: relative;
  align-items: center;
  background-color: #ffff;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;

  @media only screen and (min-width: 601px) {
    height: 90px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 28px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 35px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 40px;
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
`;

export const NavLogo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
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

export const MenuOpen = styled(RxHamburgerMenu)`
  font-size: 25px;
  cursor: pointer;
`;

export const MenuClose = styled(VscClose)`
  font-size: 25px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;

  @media only screen and (min-width: 1024px) {
    width: 33px;
    height: 33px;
  }
`;

export const LogoIcon = styled.img`
  width: 170px;
  cursor: pointer;
  margin-left: -20px;

  @media screen and (min-width: 430px) {
    width: 180px;
    margin-left: -20px;
  }

  @media only screen and (min-width: 601px) {
    margin-left: -30px;
  }

  @media only screen and (min-width: 768px) {
    width: 220px;
  }

  @media only screen and (min-width: 1024px) {
    width: 230px;
  }

  @media only screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const LoginFrame = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    gap: 10px;
  }
`;

export const HeaderTabs = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 601px) {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    gap: 15px;
  }
`;

export const MobileMenu = styled.div<{ active: boolean }>`
  @media only screen and (max-width: 600px) {
    top: 0;
    left: 0;
    z-index: 2;
    width: 98vw;
    height: 100vh;
    display: flex;
    padding: 0 30px;
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

export const Tabs = styled.p`
  padding: 4px 0;

  @media only screen and (min-width: 601px) {
    font-size: 19px;
  }

  &:hover {
    color: #c4a163;
    transition: 500ms;
  }
`;

export const TabsBackground = styled.div`
    border-radius: 28px;
    background-color: none;
    width: fit-content;
    padding: 1px 12px;

    &:hover {
      background-color: #F5F5F5;
  }
`;

export const Cart = styled(GiShoppingCart)`
  cursor: pointer;
  font-size: 22px;

  @media only screen and (min-width: 601px) {
    font-size: 25px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 30px;
  }

  &:hover {
    color: #495057;
  }
`;

export const Search = styled(IoSearchOutline)`
  cursor: pointer;
  font-size: 22px;

  @media only screen and (min-width: 601px) {
    font-size: 25px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 30px;
  }

  &:hover {
    color: #495057;
  }
`;

export const MobileNavItemSection = styled.div`
  width: 83vw;
  padding: 10px 0;
  border-top: 1px solid #000;
`;

export const MobileNavHeaderSection = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: #c4a163;
    transition: 600ms;
  }
`;

export const IconToggle = styled.span`
  font-size: 20px;
`;

export const MobileNavContentSection = styled.div<sectionProp>`
  font-size: 12px;
  margin-top: 10px;
  animation: fadeIn 2s ease-out;
  display: ${(props) => (props.isOpenItem ? "block" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ListBrace = styled.div`
  display: flex;
  text-align: left;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemLabel = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;
