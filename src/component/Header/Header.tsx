import {
  Cart,
  Icon,
  Search,
  NavLogo,
  LogoIcon,
  MenuOpen,
  MenuClose,
  Hamburger,
  Container,
  MenuBrace,
  LoginFrame,
  MobileMenu,
  MainContainer,
  BurgerMenuBrace,
  MenuBraceBigScreen,
  MobileHeaderNavContainer,
} from "./Header.styled";
import { useState } from "react";
import ImgIcon from "../../../public/Images/profile.jpeg";
import Menu from "../Menu/Menu";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

export default function Header() {

  const [IsOpen, SetIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    SetIsOpen((prevState) => !prevState);
  }

  return (
    <MainContainer>
      <Container>
        <NavLogo>
          <Hamburger onClick={toggleMenu}>
            {IsOpen ? <MenuClose /> : <MenuOpen />}
          </Hamburger>

          <LogoIcon src="/icon/logoIcon.svg" alt="logo" />
        </NavLogo>

        <MenuBraceBigScreen>
          <Menu />
        </MenuBraceBigScreen>

        <LoginFrame>
          <Search />
          <Cart />
          <Icon src={ImgIcon} alt="Icon" />
        </LoginFrame>

        <MobileMenu active={IsOpen}>
          <MobileHeaderNavContainer>
            <NavLogo>
              <Hamburger onClick={toggleMenu}>
                {IsOpen ? <MenuClose /> : <MenuOpen />}
              </Hamburger>

              <LogoIcon src="/icon/logoIcon.svg" alt="logo" />
            </NavLogo>

            <LoginFrame>
              <Search />
              <Cart />
            </LoginFrame>
          </MobileHeaderNavContainer>
          <BurgerMenuBrace>
            <Menu />
          </BurgerMenuBrace>

          <SidebarMenu />
        </MobileMenu>
      </Container>

      <MenuBrace>
        <Menu />
      </MenuBrace>
    </MainContainer>
  );
}
