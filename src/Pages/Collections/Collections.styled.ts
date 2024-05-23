import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Brace = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Irish Grover", system-ui;
`;

export const H1 = styled.h1`
  color: #ffff;
  font-size: 40px;
`;

export const Span = styled.span`
  color: #ffff;
  font-size: 20px;
`;

export const Button = styled.button`
  color: #ffff;
  font-size: 25px;
  cursor: pointer;
  background: none;
  padding: 2px 8px;
  align-self: center;
  width: fit-content;
  border-radius: 7px;
  border: 1px solid #ffff;

&:hover{
  background: #dad7cd;
  color: #343a40;
  border: 1px solid #343a40;
}
`;
