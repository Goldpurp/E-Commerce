import styled from 'styled-components';

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
  font-size: 28px;
    
  }
`;

export const FAQItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

export const Question = styled.h3`
  font-size: 13px;
  margin: 0;

  @media (min-width: 600px){
    font-size: 16px;
  }
`;

export const Answer = styled.p`
  font-size: 14px;
  line-height: 1.5;
  padding: 15px;
  background-color: #fff;
  margin: 0;
`;

export const ToggleIcon = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  background-color: #6c757d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.2s;
`;