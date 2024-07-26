import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 font-family: "Nunito", sans-serif;
`

export const Box = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 min-height: 500px;
 margin: 30px 0 0 0;
 height: 100%;
`

export const HeaderText = styled.h1`
 font-weight: 600;
 padding: 0 10px 10px 10px;
 font-family: "Montserrat", sans-serif;
 font-size: 24px;

 @media screen and (min-width: 600px) {
  margin-left: 10%;
  margin-top: 1%;
  }
`
export const Message = styled.h3`
 font-size: 18px;
 font-weight: 300;
`

export const RedirectionsTexts = styled.p`
text-align: center;
 margin-bottom: 20px;
 font-weight: 900;
 max-width: 300px;
`

export const Buttons = styled.button`
  color: black;
  margin: 10px 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: 900ms;
  padding: 5px 15px;
  width: fit-content;
  border-radius: 30px;
  border: 1px solid #daddd8;
 
  
  &:hover {
    border: 1px solid #353535;
  }
  
  @media screen and (min-width: 375px) {
    padding: 10px 15px;
  }

  @media screen and (min-width: 500px) {
    font-size: 10px;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 600;
    padding: 12px 18px;
  }
`;

export const ContentBrace = styled.div`
  padding: 30px 0;
  `;