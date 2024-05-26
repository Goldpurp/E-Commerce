// import Img1 from "../../../public/NewArrivals/1.png";
// import Img2 from "../../../public/NewArrivals/2.png";
// import Img3 from "../../../public/NewArrivals/3.png";
// import Img4 from "../../../public/NewArrivals/4.png";
// import Img5 from "../../../public/NewArrivals/5.png";
// import Img7 from "../../../public/NewArrivals/7.png";
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
  ImageBrace,
  Description,
  CarouselContainer,
  ReactionsContainer,
} from "./NewArrivalsCarousel.styled";

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
              <Image src={item.src} alt="image" />
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
