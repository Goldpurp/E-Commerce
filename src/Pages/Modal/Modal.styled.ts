import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

// Main Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  /* align-items: center;
  background-color: none;
  justify-content: center; */

  /* @media screen and (min-width: 768px) {
   flex-direction: row;
  } */

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    /* padding: 5%; */
  }

  /* @media screen and (min-width: 1440px) {
    padding: 0px 770px;
  } */
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  
  
  /* @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100%;
  } */
`;

export const ImageRow = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100dvh;
  }
`;

export const ImageBrace = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 1px;
`;

export const Image = styled.img`
  border: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 16px;
  padding: 3px 0;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Price = styled.div`
  margin: 8px 0;
  color: #2d6a4f;
  font-size: 16px;
  font-weight: bold;
`;

export const OldPrice = styled.span`
  width: 100%;
  color: #780000;
  font-size: 14px;
  flex-wrap: wrap;
  margin: 2px 10px;
  text-decoration: line-through;
`;

export const Description = styled.p`
  color: #666;
  font-size: 13px;
`;

export const Size = styled.h3`
  font-size: 14px;
  padding: 10px 0;
`;

export const SizesTabs = styled.span`
  padding: 3px;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 5px;

  &:hover {
    border: 2px solid #c4a163;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SizePicker = styled.div`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const QuantityBrace = styled.div`
  display: flex;
  align-items: center;
  /* font-weight: bold; */
`;

export const Button = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Value = styled.div`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #d0d0d0;
`;

export const AddToCartButton = styled.button`
  margin: 0 20px;
  background-color: #2d6a4f;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3c6e71;
  }
`;

export const Wishlist = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionSocialIconBrace = styled.div`
  /* gap: 15px; */
  color: gray;
  display: flex;
  /* justify-content: center; */
  /* padding: 0 10px 10px 10px; */
`;

export const SectionSocials = styled.div`
  width: 25px;
  height: 25px;
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

export const Whatsapp = styled(IoLogoWhatsapp)`
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
