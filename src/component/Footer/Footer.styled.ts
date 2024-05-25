import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 378px;
  background-color: red;
  position: relative;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;


export const Section = styled.div`
  margin-bottom: 10px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

export const SectionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  display: block;
  padding: 10px 0;
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
`;

export const Arrow = styled.span`
  font-size: 16px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

