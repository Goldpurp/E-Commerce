type sectionProp = {
  isOpenItem: boolean;
};

import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  padding: 0 20px;
  font-weight: 600;
  text-align: center;
  position: relative;
  align-items: center;
  background-color: #ffff;
  justify-content: space-between;
  font-family: "Nunito", sans-serif;

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

  @media only screen and (min-width: 1024px) {
    width: 47px;
    height: 47px;
  }
`;

export const LogoIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin-left: -10px;

  @media screen and (min-width: 430px) {
    width: 75px;
    height: 75px;
  }

  @media only screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media only screen and (min-width: 1024px) {
    width: 85px;
    height: 85px;
  }

  @media only screen and (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`;

export const LogoText = styled.h2`
  font-size: 24px;
  cursor: pointer;
  margin-left: -19px;
  font-family: cursive;

  @media only screen and (min-width: 601px) {
    font-size: 16px;
    margin-left: -10%;
  }

  @media only screen and (min-width: 667px) {
    font-size: 23px;
    margin-left: -25px;
  }

  @media only screen and (min-width: 700px) {
    margin-left: -12%;
  }

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    margin-left: -10%;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 33px;
    margin-left: -9%;
  }
`;

export const LogoText2 = styled.span`
  font-size: 16px;
  cursor: pointer;
  font-family: cursive;

  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 23px;
  }
`;

export const LoginFrame = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    gap: 15px;
  }
`;

export const HeaderTabs = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 601px) {
    gap: 17px;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 768px) {
    gap: 21px;
  }

  @media only screen and (min-width: 1024px) {
    gap: 23px;
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
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 25px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }

  &:hover {
    color: #c4a163;
    transition: 600ms;
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

  @media only screen and (min-width: 1024px) {
    font-size: 30px;
  }

  &:hover {
    color: gray;
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
  font-weight: bold;
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
`;
