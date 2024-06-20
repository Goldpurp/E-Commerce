import { Container, Button, H1, P, Img, BadgeItem, Items} from "./Showcase1.styled";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import image from "../../../public/Images/cap.png"
export default function Showcase1() {
  return (
    <Container>
      <BadgeItem>

        <Items>
      <P>Accessories</P>
      <H1>Designed Caps for culture kings</H1>
        </Items>

      <Button>
        Enter Shop <MdKeyboardDoubleArrowRight />
      </Button>
      </BadgeItem>

        <Img src={image} alt="image" />

    </Container>
  );
}
