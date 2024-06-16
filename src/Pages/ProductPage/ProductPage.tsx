import {
  Container,
  ImageSection,
  MainImage,
  InfoSection,
  Title,
  Price,
  OldPrice,
  Description,
  SizeSelect,
  Size,
  SizesTabs,
  Button,
  QuantityBrace,
  Value,
  AddToCartButton,
  ButtonCount,
  Favorite,
  Details,
  Share,
  ShareBrace,
} from "./ProductPage.styled";
import Img1 from "../../../public/ModalImgCards/1.webp";
import Img2 from "../../../public/ModalImgCards/2.webp";
import Img3 from "../../../public/ModalImgCards/3.webp";
import Img4 from "../../../public/ModalImgCards/4.webp";
import { useState } from "react";

const ProductPage = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <Container>
      <ImageSection>
        <MainImage src={Img1} alt="Levi's Men's Slim Trucker Jacket" />
        <MainImage src={Img2} alt="Levi's Men's Slim Trucker Jacket" />
        <MainImage src={Img3} alt="Levi's Men's Slim Trucker Jacket" />
        <MainImage src={Img4} alt="Levi's Men's Slim Trucker Jacket" />
      </ImageSection>
      <InfoSection>
        <ShareBrace>
        <Title>Levi’s Men’s Slim Trucker Jacket</Title>
        <Share />
            
        </ShareBrace>
        <Price>
          $150.00 <OldPrice>$267.00</OldPrice>
        </Price>
        <Description>
          <Details>Product Details</Details>
          In a constantly changing fashion environment, it’s vital to keep pace
          with the latest tendencies and blaze new trails, which is one of our
          top priorities. Efforts of our team are directed at making customers’
          feel trendy with the accessories they pick at our shop.
        </Description>
        <SizeSelect>
          <Size>Size</Size>
          <div>
            <SizesTabs>SM</SizesTabs>
            <SizesTabs>M</SizesTabs>
            <SizesTabs>L</SizesTabs>
            <SizesTabs>XL</SizesTabs>
            <SizesTabs>XXL</SizesTabs>
          </div>
        </SizeSelect>

        <QuantityBrace>
          <ButtonCount onClick={handleDecrement}>-</ButtonCount>
          <Value>{value}</Value>
          <ButtonCount onClick={handleIncrement}>+</ButtonCount>

          <AddToCartButton>Add to cart</AddToCartButton>
        </QuantityBrace>

        <Button>
          <Favorite /> Add to Wishlist
        </Button>
      </InfoSection>
    </Container>
  );
};

export default ProductPage;
