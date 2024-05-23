import Banner from "../../../public/Images/CollectionBanner.jpg";

import {
  H1,
  Span,
  Image,
  Brace,
  Button,
  Container,
} from "./Collections.styled";
export default function Collections() {
  return (
    <Container>
    <Image src={Banner} alt="" />

    <Brace>
    <Span>Explore Our New</Span> 
    <H1>COLLECTIONS</H1>
    <Button>View</Button>
    </Brace>
    </Container>
  );
}
