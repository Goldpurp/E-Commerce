import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  flex: 1;
  margin-bottom: 50px;
`;

export const BraceOne = styled.div`
    display: none;

    @media (min-width: 700px) {
    display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 0.4;
  }
`;


export const Bracetwo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0 10px 0;
  font-family: "Poppins", sans-serif;
  flex: 0.6;

  @media (min-width: 768px) {
    padding: 60px 0 10px 0;
  }
`;

export const HeaderText = styled.p`
  font-size: 38px;
  font-weight: 800;
  padding: 0 10px 10px 10px;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 700px) {
    font-size: 44px;

  }
`;

export const Span = styled.span`
 color: #386648;
`;
export const ProblemSpan = styled.span`
 text-decoration: underline;
 
 &:hover{
   color: #9f9aa4;
 }
`;

export const SignUpQuestion = styled.p`
font-weight: 500;
`;

export const Problems = styled.p`
  font-size: 14px;
  margin-top: 60px;
  font-weight: 400;
  max-width: 200px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
`;

export const Input = styled.input`
  color: #000;
  width: 100%;
  border: none;
  height: 50px;
  outline: none;
  font-size: 14px;
  border-radius: 10px;
  background-color: #fff;
  padding: 7px 45px 7px 12px;
`;

export const TextArea = styled.textarea`
  color: #000;
  width: 100%;
  border: none;
  resize: none;
  height: 150px;
  outline: none;
  font-size: 14px;
  border-radius: 10px;
  background-color: #fff;
  padding: 7px 45px 7px 12px;
`;

export const InputBrace = styled.div`
  width: 300px;
  margin: 20px 0;
  max-width: 400px;
  align-self: center;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #ced4da;

  @media (min-width: 370px) {
  width: 350px;
  }
`;

export const Btn = styled.button`
  width: 300px;
  color: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  max-width: 400px;
  transition: 400ms;
  align-self: center;
  padding: 12px 18px;
  border-radius: 30px;
  border: 0.6px solid #daddd8;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: #ced4da;
  }

  @media (min-width: 370px) {
  width: 350px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Agreement = styled.p`
  font-size: 10px;
  margin-top: 60px;
  max-width: 300px;
  text-align: center;
`;

export const AgreementSpan = styled.span`
 text-decoration: underline;
 
 &:hover{
   color: #9f9aa4;
 }
`;

export const ReactLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const Image = styled.img`

@media (min-width: 700px) {
  width: 90%;
  }

@media (min-width: 850px) {
  width: 90%;
margin-left: 100px;
  }

  @media (min-width: 1024px) {
  width: 90%;
margin-left: 150px;
  }
`;

export const BackBtn = styled.button`
background: none;
border: none;
color: #000;
font-size: 17px;
cursor: pointer;


@media (min-width: 768px) {
  font-size: 22px;
  }
`;

export const BackBrace = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: none;
border: none;
font-size: 17px;
margin: 10px 0 0 20px;
text-align: center;
gap: 5px;
cursor: pointer;
width: fit-content;


@media (min-width: 768px) {
  font-size: 26px;
margin: 15px 0 0 30px;
  }
`;

