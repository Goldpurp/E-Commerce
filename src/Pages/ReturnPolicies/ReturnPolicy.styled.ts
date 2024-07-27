import styled from 'styled-components';

type AccordionContentProps = {
  isOpen: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 15px auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 2;
  margin-right: 20px;
`;

export const Sidebar = styled.div`
  flex: 1;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 25.6px; 
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;  
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: #333;
  }
`;

export const AccordionSection = styled.div`
  border-top: 1px solid #ccc;
  &:last-of-type {
    border-bottom: 1px solid #ccc;
  }
`;

export const AccordionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #f7f7f7;
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  padding: 10px;
  animation: fadeIn 2s ease-out;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const SidebarHeading = styled.h3`
  font-size: 19.2px; 
  margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarListItem = styled.li`
  margin-bottom: 10px;
`;
