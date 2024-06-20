import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderTabs = styled.div`
  gap: 30px;
  width: 100vw;
  height: 36px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  @media only screen and (min-width: 500px) {
    gap: 60px;
  }
`;

export const Tabs = styled.p`
  padding: 5px 0;
  font-size: 18px;
  font-weight: 500;

  @media only screen and (min-width: 601px) {
    font-size: 19px;
  }

  &:hover {
    color: #c4a163;
    transition: 400ms;
    line-height: 15px;
    border-bottom: 1px solid #c4a163;
  }
`;

export const ReactLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
