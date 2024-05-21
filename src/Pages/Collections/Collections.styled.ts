import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Brace = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const H1 = styled.h1`
  color: #ffff;
  font-size: 30px;
`;

export const Button = styled.button`
align-self: center;
  color: #ffff;
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: 2px solid #ffff;
  width: fit-content;
  padding: 3px 8px;
  border-radius: 10px;
`;
