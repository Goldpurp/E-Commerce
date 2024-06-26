import Img6 from "../../../public/NewArrivals/6.png";

import {
  Row,
  Card,
  Image,
  Price,
  Title,
  Content,
  CartItem,
  LikeItem,
  ReactLink,
  ImageBrace,
  Description,
  CarouselContainer,
  ReactionsContainer,
} from "./NewArrivalsCards.styled";

export default function NewArrivalsCarousel() {
  const newArrivalItems = [
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
  ];

  return (
    <CarouselContainer>
      <Row>
        {newArrivalItems.map((item, itemIndex) => (
          <Card key={itemIndex}>
            <ImageBrace>
            <ReactLink to={"product"}>
              <Image src={item.src} alt="image" />
              </ReactLink>
            </ImageBrace>
            <Content>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Price>₦{item.price}</Price>
              <ReactionsContainer>
                <LikeItem />
                <CartItem />
              </ReactionsContainer>
            </Content>
          </Card>
        ))}
      </Row>
    </CarouselContainer>
  );
}
