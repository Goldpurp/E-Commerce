import {
  Tabs,
  Cart,
  Icon,
  // Span,
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
  IconToggle,
  // MobileMenuLines,
  // MobileMenuLines2,
  // MobileMenuLoginStyle,
  MobileNavItemSection,
  MobileNavHeaderSection,
  MobileNavContentSection,
  MobileHeaderNavContainer,
} from "./Header.styled";
import { useState } from "react";
// import { MdLogin } from "react-icons/md";
// import { LiaStoreSolid } from "react-icons/lia";
import Logo from "../../../public/Images/logoIcon.png";
import ImgIcon from "../../../public/Images/newIcon2.png";

export default function Header() {

  type OpenState = {
    AllProducts: boolean;
  };

  const [isOpenItem, setIsOpenItem] = useState({
    AllProducts: false,
  });

  const toggleItemSection = (section: keyof OpenState) => {
    
    setIsOpenItem((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  

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
          <Tabs>Men</Tabs>
          <Tabs>Women</Tabs>
          <Tabs>Kids</Tabs>
          <Tabs>Brands</Tabs>
          {/* <Tabs>
            New
          </Tabs> */}
        </HeaderTabs>

        <LoginFrame>
          <Cart />
          <Icon src={ImgIcon} alt="Icon" />
        </LoginFrame>

        <MobileMenu active={IsOpen}>
          <MobileHeaderNavContainer>
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

          <div>

            <MobileNavItemSection>

              <MobileNavHeaderSection onClick={() => toggleItemSection("AllProducts")}>
                <Tabs>All Products</Tabs>
                <IconToggle>{isOpenItem.AllProducts ? "-" : "+"}</IconToggle>
              </MobileNavHeaderSection>

              <MobileNavContentSection isOpenItem={isOpenItem.AllProducts}>
                <Tabs>New Arrivals</Tabs>
                <Tabs>Men</Tabs>
                <Tabs>Women</Tabs>
                <Tabs>Kids</Tabs>
                <Tabs>Accessories</Tabs>
              </MobileNavContentSection>



            </MobileNavItemSection>

            {/* <MobileMenuLines2>
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
          </MobileMenuLoginStyle> */}
          </div>
        </MobileMenu>
      </Container>
    </>
  );
}
