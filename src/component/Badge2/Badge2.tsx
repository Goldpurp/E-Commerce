import { Container, Button, H1, P, Img, BadgeItem, Items} from "./Badge2.styled";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import image from "../../../public/Images/bracelet.png"
export default function Badge2() {
  return (
    <Container>
      <BadgeItem>

        <Items>
      <P>Jewelries</P>
      <H1>Unisex Moissanite Bracelets</H1>
        </Items>

      <Button>
        Enter Shop <MdKeyboardDoubleArrowRight />
      </Button>
      </BadgeItem>

        <Img src={image} alt="image" />

    </Container>
  );
}
