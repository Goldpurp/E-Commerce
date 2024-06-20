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
 font-size: 28px;

  @media screen and (min-width: 600px) {
  margin-left: 10%;
  margin-top: 1%;
  }
`
export const Message = styled.h3`
 font-size: 23px;
`

export const RedirectionsTexts = styled.p`
text-align: center;
 max-width: 300px;
 margin-bottom: 70px;
`

export const ButtonContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px 30px 20px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  `;