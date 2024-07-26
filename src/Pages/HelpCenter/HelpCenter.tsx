import {
    Box,
  Container,
  HelpImg,
  HeaderText,
  HeaderTextHelp,
  BottomTextHelp,
  SearchBox,
  HelpButton,
  SearchInput,
  SearchIcon,
  PopularSearchItems,
  CustomerSupportBrace,
  PopularSearchLabel,
} from "./HelpCenter.styled";
import helpDesk from "../../../public/icon/helpCenter.png"

export default function HelpCenter() {
  return (
    <Container>
      <HeaderText>How can we help?</HeaderText>

      <SearchBox>
        <SearchIcon />
        <SearchInput type="search" placeholder="Search our knowledge base" />
      </SearchBox>

      <Box>
      <PopularSearchLabel>Popular searches:</PopularSearchLabel>
    <PopularSearchItems>Bracelet</PopularSearchItems>
    <PopularSearchItems>Side bag</PopularSearchItems>
    <PopularSearchItems>Skechers</PopularSearchItems>
      </Box>


      <CustomerSupportBrace>
      <HeaderTextHelp>We're here to help</HeaderTextHelp>
        <BottomTextHelp>Contact our support team or get your questions answered by one of our experts.</BottomTextHelp>

            <HelpImg src={helpDesk} alt="image" />
            <HelpButton>Contact support</HelpButton>
      </CustomerSupportBrace>
    </Container>
  );
}
