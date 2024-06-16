import { MdFavoriteBorder } from "react-icons/md";

import {
  Container,
  ImageContainer,
  ImageBrace,
  Image,
  ImageRow,
  Title,
  Info,
  Price,
  OldPrice,
  Description,
  Size,
  SizesTabs,
  Form,
  QuantityBrace,
  Button,
  SizePicker,
  AddToCartButton,
  Value,
  Wishlist,
  CategoryItem,
  SectionSocialIconBrace,
  SectionSocials,
  Instagram,
  Pinterest,
  Whatsapp,
  Snapchat,
  Facebook,
  Twitter,
  Share,
} from "./Modal.styled";

import Img1 from "../../../public/ModalImgCards/1.webp";
import Img2 from "../../../public/ModalImgCards/2.webp";
import Img3 from "../../../public/ModalImgCards/3.webp";
import Img4 from "../../../public/ModalImgCards/4.webp";
import { FormEvent, useState } from "react";

export default function Modal() {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container>
      <ImageRow>
        <ImageContainer>
          <ImageBrace>
            <Image src={Img1} alt="image1" />
          </ImageBrace>
          <ImageBrace>
            <Image src={Img2} alt="image2" />
          </ImageBrace>
          <ImageBrace>
            <Image src={Img3} alt="image3" />
          </ImageBrace>
          <ImageBrace>
            <Image src={Img4} alt="image4" />
          </ImageBrace>
        </ImageContainer>
      </ImageRow>
      {/* <div>
          <img src={Img1} alt="image1" />
        </div> */}

      <div>
        <Info>
          <Title>Basic Short Sleeve Casual T Shirt</Title>
          <Price>
            #30,259.00 <OldPrice>#40,2453.00</OldPrice>
          </Price>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            voluptatibus libero quas veniam aspernatur totam delectus
            necessitatibus illo possimus iste, neque quisquam est temporibus.
            Ipsum sed minima dolorum sapiente? Laboriosam!
          </Description>
        </Info>

        <Info>
          <Form onSubmit={handleSubmit}>
            <SizePicker>
              <Size>Size</Size>
              <div>
                <SizesTabs>SM</SizesTabs>
                <SizesTabs>M</SizesTabs>
                <SizesTabs>L</SizesTabs>
                <SizesTabs>XL</SizesTabs>
                <SizesTabs>XXL</SizesTabs>
              </div>
            </SizePicker>

            <QuantityBrace>
              <Button onClick={handleDecrement}>-</Button>
              <Value>{value}</Value>
              <Button onClick={handleIncrement}>+</Button>

              <AddToCartButton>Add to cart</AddToCartButton>
            </QuantityBrace>

            <Wishlist>
              <span>Add to wishlist</span>
              <MdFavoriteBorder />
            </Wishlist>

            <CategoryItem>
              <p>Categories: xyz</p>
              <Share>
                <span>
                Share:
                </span>
                <span>
          
                  <SectionSocialIconBrace>
                    <SectionSocials>
                      <Pinterest />
                    </SectionSocials>
                    <SectionSocials>
                      <Whatsapp />
                    </SectionSocials>
                    <SectionSocials>
                      <Snapchat />
                    </SectionSocials>
                    <SectionSocials>
                      <Instagram />
                    </SectionSocials>
                    <SectionSocials>
                      <Facebook />
                    </SectionSocials>
                    <SectionSocials>
                      <Twitter />
                    </SectionSocials>
                  </SectionSocialIconBrace>
                </span>
              </Share>
            </CategoryItem>
          </Form>
        </Info>
      </div>
    </Container>
  );
}
