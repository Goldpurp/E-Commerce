import Banner from "../../../public/Images/col.jpg";
import ShopNowBtn from "../../component/ShopNowBtn/ShopNowBtn";

import {
  H1,
  Span,
  Brace,
  Image,
  Container,
  ImageContainer,
} from "./Collections.styled";
export default function Collections() {
  return (
    <Container>

      <ImageContainer>
        <Image src={Banner} alt="ColImages" />
      </ImageContainer>

      <Brace>
        <Span>Explore Our</Span>
        <H1>COLLECTIONS</H1>
        <ShopNowBtn />
      </Brace>
    </Container>
  );
}
