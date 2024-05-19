import {
  Container,
  HeroImages,
  HeroItemBrace,
  HeroImagesMini,
} from "./Hero.styled";
import Ads from "../../component/Ads/Ads";
import HeroImg from "../../../public/Images/heroImg2.png";
import HeroImgMini from "../../../public/Images/heroImg2mini.png";
export default function Hero() {
  return (
    <Container>
      <HeroItemBrace>
        <Ads />
      </HeroItemBrace>
      <HeroImages src={HeroImg} alt="HomeImage" />
      <HeroImagesMini src={HeroImgMini} alt="HomeImage" />
    </Container>
  );
}
