import Img1 from "../../../public/NewArrivalsImg/1.png";
import Img2 from "../../../public/NewArrivalsImg/2.png";
import Img3 from "../../../public/NewArrivalsImg/3.png";
import {
  Container,
  CarouselCards,
  Img,
  ProductTitle,
  ProductDetails,
  Productprice,
} from "./Carousel.styled";

export default function Carousel() {
  return (
    <Container>
      <div>
        <CarouselCards>
          <Img src={Img1} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img2} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img3} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img1} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img1} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img2} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img3} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>

      <div>
        <CarouselCards>
          <Img src={Img1} alt="" />
        </CarouselCards>

        <div>
          <ProductTitle>Official Outfit</ProductTitle>
          <ProductDetails>Breathable dress for men in college</ProductDetails>
          <Productprice>$345.99</Productprice>
        </div>
      </div>
    </Container>
  );
}
