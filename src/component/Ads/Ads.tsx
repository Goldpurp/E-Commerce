import { Container, Button, H1, P } from "./Ads.styled";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function Ads() {
  return (
    <Container>
      <P>SUMMER SALE IS ON</P>
      <H1>Discover Men's Latest Fashion</H1>
      <Button>
        Discover More <MdKeyboardDoubleArrowRight />
      </Button>
    </Container>
  );
}
