import {
  Cart,
  Icon,
  Search,
  NavLogo,
  LogoIcon,
  MenuOpen,
  Favorites,
  MenuClose,
  Hamburger,
  Container,
  MenuBrace,
  ReactLink,
  LoginFrame,
  MobileMenu,
  MainContainer,
  // BurgerMenuBrace,
  MenuBraceBigScreen,
  MobileHeaderNavContainer,
} from "./Header.styled";
import { useState } from "react";
import ImgIcon from "../../../public/Images/profile.jpeg";
import Menu from "../Menu/Menu";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import LoginDrawer from "../LoginDrawer/LoginDrawer";

export default function Header() {

  const [IsOpen, SetIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    SetIsOpen((prevState) => !prevState);
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <MainContainer>
      <Container>
        <NavLogo>
          <Hamburger onClick={toggleMenu}>
            {IsOpen ? <MenuClose /> : <MenuOpen />}
          </Hamburger>
          <ReactLink to={"/"}>

            <LogoIcon src="/icon/logoIcon.svg" alt="logo" />
          </ReactLink>
        </NavLogo>

        <MenuBraceBigScreen>
          <Menu />
        </MenuBraceBigScreen>

        <LoginFrame>

          <Search />
          <ReactLink to={"wishlist"}>
            <Favorites />
          </ReactLink>

          <ReactLink to={"cart"}>
            <Cart />
          </ReactLink>

          <Icon src={ImgIcon} alt="Icon" onClick={toggleDrawer}/>
         
        </LoginFrame>

        <MobileMenu active={IsOpen}>
          <MobileHeaderNavContainer>
            <NavLogo>
              <Hamburger onClick={toggleMenu}>
                {IsOpen ? <MenuClose /> : <MenuOpen />}
              </Hamburger>

              <ReactLink to={"/"}>

                <LogoIcon src="/icon/logoIcon.svg" alt="logo" />
              </ReactLink>
            </NavLogo>

            <LoginFrame>
              <Search />
              <ReactLink to={"wishlist"}>
                <Favorites />
              </ReactLink>
              <ReactLink to={"cart"}>
                <Cart />
              </ReactLink>
            </LoginFrame>
          </MobileHeaderNavContainer>
          {/* <BurgerMenuBrace>
            <Menu />
          </BurgerMenuBrace> */}

          <SidebarMenu />
        </MobileMenu>
      </Container>

      <MenuBrace>
        <Menu />
      </MenuBrace>
  
      <LoginDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}/>
    </MainContainer>
  );
}
