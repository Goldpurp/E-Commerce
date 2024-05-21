import Banner from "../../../public/Images/CollectionBanner.jpg";

import {
  Container,
  Image,
  Brace,
  Button,
  H1
} from "./Collections.styled";
export default function Collections() {
  return (
    <Container>
    <Image src={Banner} alt="" />

    <Brace>

    <H1>COLLECTION</H1>
    <Button>View</Button>
    </Brace>
    </Container>
  );
}
