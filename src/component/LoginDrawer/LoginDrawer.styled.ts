import styled, { keyframes } from "styled-components";
import { VscClose } from "react-icons/vsc";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const DrawerContainer = styled.div<{ isOpen?: boolean }>`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 20px;
  position: fixed;
  overflow-y: scroll;
  background: #f8f9fa;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-family: "Poppins", sans-serif;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};

&::-webkit-scrollbar {
  display: none;
}

  @media (min-width: 460px) {
    bottom: none;
    height: 100%;
    width: 100vw;
    border-radius: 10px;
    animation: fadeIn 5s ease-out;
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.1s ease-out
      forwards;
  }

`;

export const Overlay = styled.div<{ isOpen?: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const CloseButton = styled(VscClose)`
  top: 20px;
  right: 25px;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
`;

