import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Brace = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: #ffff;
  font-size: 30px;
`;

export const Button = styled.button`
  color: #ffff;
  font-size: 30px;
  cursor: pointer;
  background: none;
  padding: 3px 8px;
  align-self: center;
  width: fit-content;
  border-radius: 10px;
  border: 2px solid #ffff;
`;
