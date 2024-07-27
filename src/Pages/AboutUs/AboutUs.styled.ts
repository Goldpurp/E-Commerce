import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  flex: 1;
  height: auto;
  margin: 10px 0;
  padding: 20px;
`;

export const BraceOne = styled.div`
    display: none;

    @media (min-width: 700px) {
    display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 0.5;
  }
`;


export const Bracetwo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  flex: 1;

  @media (min-width: 768px) {
    flex: 0.5;
    padding: 0 50px;
  }
`;

export const HeaderText = styled.p`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  padding: 0 10px 10px 10px;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 700px) {
    font-size: 44px;

  }
`;

export const Image = styled.img`
width: 70%;
height: 500px;
object-fit: cover;
`;


