type sectionProp = {
    isOpenItem: boolean;
  };
  
  import styled from "styled-components";

  export const Tabs = styled.p`
  padding: 4px 0;

  @media only screen and (min-width: 601px) {
    font-size: 19px;
  }

  &:hover {
    color: #c4a163;
    transition: 500ms;
  }
`;

export const ItemLabel = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;

export const SpecialItemLabel = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;

  &:hover {
    color: #c4a163;
    transition: 500ms;
    cursor: pointer;
  }
`;

export const ListBrace = styled.div`
  display: flex;
  text-align: left;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IconToggle = styled.span`
  font-size: 20px;
`;

export const MobileNavItemSection = styled.div`
  width: 83vw;
  padding: 10px 0;
  border-top: 1px solid #000;
`;

export const MobileNavHeaderSection = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: #c4a163;
    transition: 600ms;
  }
`;

export const MobileNavContentSection = styled.div<sectionProp>`
  font-size: 12px;
  margin-top: 10px;
  animation: fadeIn 2s ease-out;
  display: ${(props) => (props.isOpenItem ? "block" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CopyRightBrace = styled.div`
padding: 70px 0 30px 0;
`;