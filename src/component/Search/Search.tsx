import { Container, SearchBox, SearchIcon, SearchInput, ModalBackdrop } from "./Search.styled";

interface SearchProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function SearchModal({ isOpen, onClose }: SearchProps) {
    if (!isOpen) return null;
  return (

    <ModalBackdrop onClick={onClose}>

    <Container>
      <SearchBox  onClick={(e) => e.stopPropagation()}>
        <SearchIcon />
        <SearchInput type="search" placeholder="enter search" />
      </SearchBox>
    </Container>
    </ModalBackdrop>
  );
}
