import Img1 from "../../../public/Cards/Ads-1.png";
import Img2 from "../../../public/Cards/Ads-2.png";
import Img3 from "../../../public/Cards/Ads-3.png";
import Img4 from "../../../public/Cards/Ads-4.png";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselItem,
  CarouselBox,
  Image,
} from "./Section.styled";
export default function Section() {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img1} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img2} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img3} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img4} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img1} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img2} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img3} alt="image" />
          </CarouselBox>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img4} alt="image" />
          </CarouselBox>
        </CarouselItem>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
