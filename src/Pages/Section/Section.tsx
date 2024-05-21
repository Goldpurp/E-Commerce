import Img1 from "../../../public/Cards/ads-1.png";
import Img2 from "../../../public/Cards/Ads-2.png";
import Img3 from "../../../public/Cards/Ads-3.png";
import Img4 from "../../../public/Cards/Ads-4.png";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselItem,
  CarouselBox,
  Image,
  Label,
  Price,
  OldPrice,
  Bonus,
} from "./Section.styled";
export default function Section() {
  return (
    <CarouselContainer>
      <CarouselWrapper>

        <CarouselItem>
          <CarouselBox>
            <Image src={Img1} alt="image" />
          </CarouselBox>
          <Label>The Batman Comics Short Sleeve Tee - Navy</Label>
          <Price>$120.40  <OldPrice>$230.00</OldPrice></Price>
          <Bonus>Get $20 Off On $100+ Orders! Use Code: FREE20</Bonus>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img2} alt="image" />
          </CarouselBox>
          <Label>The Batman Comics Short Sleeve Tee - Navy</Label>
          <Price>$120.40  <OldPrice>$230.00</OldPrice></Price>
          <Bonus>Get $20 Off On $100+ Orders! Use Code: FREE20</Bonus>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img3} alt="image" />
          </CarouselBox>
          <Label>The Batman Comics Short Sleeve Tee - Navy</Label>
          <Price>$120.40  <OldPrice>$230.00</OldPrice></Price>
          <Bonus>Get $20 Off On $100+ Orders! Use Code: FREE20</Bonus>
        </CarouselItem>
        <CarouselItem>
          <CarouselBox>
            <Image src={Img4} alt="image" />
          </CarouselBox>
          <Label>The Batman Comics Short Sleeve Tee - Navy</Label>
          <Price>$120.40  <OldPrice>$230.00</OldPrice></Price>
          <Bonus>Get $20 Off On $100+ Orders! Use Code: FREE20</Bonus>
        </CarouselItem>
      
      </CarouselWrapper>
    </CarouselContainer>
  );
}
