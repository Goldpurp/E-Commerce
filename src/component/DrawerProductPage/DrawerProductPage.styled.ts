import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



export const DrawerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70%;
  width: 100%;
  background: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;

  /* @media (min-width: 768px) {
    bottom: unset;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};
  } */

  @media (min-width: 830px) {
    width: 430px;
  }
`;

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
`;

export const ShareLink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  /* gap: 30%; */
  text-align: center;

  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;


  &:hover {
    background: #f0f0f0;
  }
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
  padding: 15px;
  outline: none;
  margin-bottom: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const CopyBtn = styled.button`
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Instagram = styled(RiInstagramFill)`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

export const Pinterest = styled(FaPinterest)`
    width: 80%;
  height: 80%;
  cursor: pointer;
`;

export const Whatsapp = styled(IoLogoWhatsapp)`
   width: 80%;
  height: 80%;
  cursor: pointer;
`;

export const Snapchat = styled(FaSnapchatGhost)`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

export const Facebook = styled(FaFacebook)`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

export const Twitter = styled(FaXTwitter)`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;
