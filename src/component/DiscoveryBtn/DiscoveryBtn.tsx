import { Container, Button, H1, P } from "./DiscoveryBtn.styled";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function DiscoveryBtn() {
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
