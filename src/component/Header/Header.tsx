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
  MenuBraceBigScreen,
  MobileHeaderNavContainer,
} from "./Header.styled";
import { useState } from "react";
import ImgIcon from "../../../public/Images/profile.jpeg";
import Menu from "../Menu/Menu";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import LoginDrawer from "../LoginDrawer/LoginDrawer";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/baseRoutes";

export default function Header() {
  const navigate = useNavigate();

  const handleRoute = (path: string) => {
    navigate(path);
  };

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
          <LogoIcon src="/icon/logoIcon.svg" alt="logo" onClick={() => handleRoute(Routes.home)} />
        </NavLogo>

        <MenuBraceBigScreen>
          <Menu />
        </MenuBraceBigScreen>

        <LoginFrame>
          <Search />
          <ReactLink to={Routes.wishlist}>
            <Favorites />
          </ReactLink>
          <ReactLink to={Routes.cart}>
            <Cart />
          </ReactLink>
          <Icon src={ImgIcon} alt="Icon" onClick={toggleDrawer} />
        </LoginFrame>

        <MobileMenu active={IsOpen}>
          <MobileHeaderNavContainer>
            <NavLogo>
              <Hamburger onClick={toggleMenu}>
                {IsOpen ? <MenuClose /> : <MenuOpen />}
              </Hamburger>
              <ReactLink to={Routes.home}>
                <LogoIcon src="/icon/logoIcon.svg" alt="logo" />
              </ReactLink>
            </NavLogo>

            <LoginFrame>
              <Search />
              <Favorites onClick={() => handleRoute(Routes.wishlist)} />
              <Cart onClick={() => handleRoute(Routes.cart)} />
            </LoginFrame>
          </MobileHeaderNavContainer>
          <SidebarMenu />
        </MobileMenu>
      </Container>

      <MenuBrace>
        <Menu />
      </MenuBrace>

      <LoginDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </MainContainer>
  );
}
