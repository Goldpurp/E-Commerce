import styled, { keyframes } from "styled-components";
import { VscClose } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

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
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: 40%;
  width: 100%;
  background: #f8f9fa;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;

  @media (min-width: 460px) {
    top: 35%;
    left: 10%;
    height: 260px;
    width: 380px;
    border-radius: 10px;
    animation: fadeIn 5s ease-out;
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.1s ease-out
      forwards;
  }

  @media (min-width: 500px) {
    left: 15%;
  }

  @media (min-width: 600px) {
    left: 20%;
  }

  @media (min-width: 768px) {
    left: 30%;
  }

  @media (min-width: 1024px) {
    left: 35%;
  }

  @media (min-width: 1440px) {
    left: 40%;
  }
`;

export const Overlay = styled.div<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CloseButton = styled(VscClose)`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 25px;
`;

export const ShareLink = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  font-size: 9px;
  margin: 20px 0 10px 0;
  /* gap: 30%; */
  text-align: center;
`;

export const SocialsBrace = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SocialsBraceY = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Share = styled.h4`
  font-weight: 300;
`;

export const ShareIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  outline: none;
  margin-bottom: 13px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const CopyBtn = styled.button`
  width: 100%;
  padding: 13px 15px;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Instagram = styled(RiInstagramFill)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Pinterest = styled(FaPinterest)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Whatsapp = styled(IoLogoWhatsapp)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Snapchat = styled(FaSnapchatGhost)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Facebook = styled(FaFacebook)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Twitter = styled(FaXTwitter)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
