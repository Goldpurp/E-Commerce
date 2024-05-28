type sectionProp = {
  isOpen: boolean;
};
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosDoneAll } from "react-icons/io";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: #fff;
  padding: 10px 20px;
  font-family: Montserrat;
  background-color: #0b090a;
`;

export const SectionBrace = styled.div`
  padding: 40px 0 30px 0;
`;

export const Section = styled.div`
  padding: 10px 0;
  border-top: 1px solid #333;
`;

export const SectionHeader = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #ffff;
  font-size: 14px;
`;

export const Icon = styled.span`
  font-size: 20px;
`;

export const SectionContent = styled.div<sectionProp>`
  margin-top: 10px;
  font-size: 12px;
  animation: fadeIn 2s ease-out;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Link = styled.a`
  display: block;
  padding: 8px 0;
  color: #adb5bd;
  text-decoration: none;

  &:hover {
    color: #dee2e6;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const SectionSocialIconBrace = styled.div`
  gap: 15px;
  color: gray;
  display: flex;
  justify-content: center;
  padding: 0 10px 10px 10px;
`;

export const SectionSocials = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const Instagram = styled(RiInstagramFill)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Pinterest = styled(FaPinterest)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Youtube = styled(IoLogoYoutube)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Snapchat = styled(FaSnapchatGhost)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Facebook = styled(FaFacebook)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Twitter = styled(FaXTwitter)`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const Refrence = styled.a`
  color: gray;
  text-decoration: underline;
`;

export const Text = styled.p`
  color: gray;
  font-size: 10px;
  text-decoration: none;
`;

export const MailBrace = styled.div`
  gap: 10px;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  color: #000;
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 13px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid gray;
  padding: 7px 45px 7px 12px;
`;

export const Btn = styled.button`
  top: 10px;
  right: 8px;
  width: 30px;
  color: #fff;
  height: 30px;
  border: none;
  border-radius: 50%;
  position: absolute;
  background-color: #8b8c89;
`;

export const Done = styled(IoIosDoneAll)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
