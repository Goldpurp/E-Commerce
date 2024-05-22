import {
  Tabs,
  Cart,
  Icon,
  Span,
  NavLogo,
  LogoText,
  LogoIcon,
  MenuOpen,
  MenuClose,
  Hamburger,
  LogoText2,
  Container,
  HeaderTabs,
  LoginFrame,
  MobileMenu,
  MobileMenuLines,
  MobileMenuLines2,
  MobileMenuLoginStyle,
  MobileHeaderNavContainer,
} from "./Header.styled";
import Logo from "../../../public/Images/logoIcon.png";
import ImgIcon from "../../../public/Images/newIcon2.png";
import { MdLogin } from "react-icons/md";
import { LiaStoreSolid } from "react-icons/lia";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

export default function Header() {
  const [IsOpen, SetIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    SetIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Container>

          <Hamburger onClick={toggleMenu}>
            {IsOpen ? <MenuClose /> : <MenuOpen />}
          </Hamburger>

        <NavLogo>
          <LogoIcon src={Logo} alt="logo" />
          <LogoText>
            GoldPurp's <LogoText2>Vogue</LogoText2>
          </LogoText>
        </NavLogo>

        <HeaderTabs>
          <Tabs>
            Home
            <RiArrowDownSFill />
          </Tabs>
          <Tabs>
            Men
            <RiArrowDownSFill />
          </Tabs>
          <Tabs>
            Women
            <RiArrowDownSFill />
          </Tabs>
          <Tabs>
            Brands
            <RiArrowDownSFill />
          </Tabs>
          <Tabs>
            New
            <RiArrowDownSFill />
          </Tabs>
        </HeaderTabs>

        <LoginFrame>
          <Cart />

          <Icon src={ImgIcon} alt="Icon" />
        </LoginFrame>


        <MobileMenu active={IsOpen}>

          <MobileHeaderNavContainer >


        <Hamburger onClick={toggleMenu}>
            {IsOpen ? <MenuClose /> : <MenuOpen />}
          </Hamburger>

        <NavLogo>
          <LogoIcon src={Logo} alt="logo" />
          <LogoText>
            GoldPurp's <LogoText2>Vogue</LogoText2>
          </LogoText>
        </NavLogo>

        <LoginFrame>
          <Cart />
        </LoginFrame>

          </MobileHeaderNavContainer>


          <MobileMenuLines>
            <Tabs>All Products</Tabs>
            <Tabs>New Arrivals</Tabs>
            <Tabs>Men</Tabs>
            <Tabs>Women</Tabs>
            <Tabs>Kids</Tabs>
            <Tabs>Accessories</Tabs>
          </MobileMenuLines>

          <MobileMenuLines2>
            <Tabs>Sport Wears</Tabs>
            <Tabs>Ocassions</Tabs>
          </MobileMenuLines2>

          <MobileMenuLines>
            <Tabs>Blog</Tabs>
            <Tabs>Policies</Tabs>
            <Tabs>About Us</Tabs>
            <Tabs>Contact Us</Tabs>
          </MobileMenuLines>

          <MobileMenuLoginStyle>
            <Span>
              <MdLogin /> sign In
            </Span>
            <Span>
              <LiaStoreSolid /> Our Store
            </Span>
          </MobileMenuLoginStyle>
        </MobileMenu>

      </Container>
    </>
  );
}
