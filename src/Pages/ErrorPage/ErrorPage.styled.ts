import styled from 'styled-components';

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LogoBox = styled.div`
  padding-left: ${({ theme }) => theme.space[4]};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.space[20]};
  }
`;

export const StyledImage = styled.img`
  width: 150px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 160px;
  }
`;

export const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const InnerFlex = styled.div`
  display: flex;
`;

export const ContentBox = styled.div`
  padding: 2rem 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 5rem;
  }
`;

export const TextContainer = styled.div`
  padding: 20px 0;
  gap: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  font-family: 'Gilda Display', serif;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const SubHeading = styled.h2`
  font-weight: 600;
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const ListText = styled.div`
  padding-left: 20px;
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 600;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 1rem;
  display: flex;
`;

export const ErrorImageContainer = styled.div`
  padding-top: 8rem;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const ErrorImage = styled.img`
  width: 250px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 450px;
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
