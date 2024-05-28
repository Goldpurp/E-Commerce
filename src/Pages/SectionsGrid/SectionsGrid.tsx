import ShoeImg from "../../../public/Products/shoe.jpg";
import BagImg from "../../../public/Products/bag.jpg";
import HatImg from "../../../public/Products/hat.jpg";
import ShadeImg from "../../../public/Products/shade.jpg";

import {
  Image,
  Label,
  Brace,
  CarouselBox,
  CarouselItem,
  CarouselWrapper,
  CarouselContainer,
} from "./SectionsGrid.styled";

export default function SectionsGrid() {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselItem>
          <CarouselBox>
            <Image src={ShoeImg} alt="ShoeImg" />
          </CarouselBox>
          <Brace>
            <Label>SHOP SHOES</Label>
          </Brace>
        </CarouselItem>

        <CarouselItem>
          <CarouselBox>
            <Image src={BagImg} alt="BagImg" />
          </CarouselBox>
          <Brace>
            <Label>SHOP BAGS</Label>
          </Brace>
        </CarouselItem>

        <CarouselItem>
          <CarouselBox>
            <Image src={HatImg} alt="HatImg" />
          </CarouselBox>
          <Brace>
            <Label>SHOP HATS</Label>
          </Brace>
        </CarouselItem>

        <CarouselItem>
          <CarouselBox>
            <Image src={ShadeImg} alt="ShadeImg" />
          </CarouselBox>
          <Brace>
            <Label>SHOP SHADES</Label>
          </Brace>
        </CarouselItem>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
