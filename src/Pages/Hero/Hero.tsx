import {
  Container,
  HeroImages,
  HeroItemBrace,
  HeroImagesMini,
} from "./Hero.styled";
import Ads from "../../component/Ads/Ads";
import HeroImg from "../../../public/Images/hero3.png";
import HeroImgMini from "../../../public/Images/heroMini3.png";
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
