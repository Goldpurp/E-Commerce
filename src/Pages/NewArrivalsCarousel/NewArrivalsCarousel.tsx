import Img1 from "../../../public/NewArrivals/1.png";
import Img2 from "../../../public/NewArrivals/2.png";
import Img3 from "../../../public/NewArrivals/3.png";
import Img4 from "../../../public/NewArrivals/4.png";
import Img5 from "../../../public/NewArrivals/5.png";
import Img6 from "../../../public/NewArrivals/6.png";
import Img7 from "../../../public/NewArrivals/7.png";

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
  const images = [
    {
      src: Img5,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img2,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img3,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img4,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img1,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },  {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },  {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },  {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },  {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },  {
      src: Img6,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
    {
      src: Img7,
      title: "Official Outfit",
      description: "Breathable dress for men in",
      price: "$345.99",
    },
  ];

  return (
    <CarouselContainer>
      <Row>
        {images.map((item, imageIndex) => (
          <Card key={imageIndex}>
            <ImageBrace>
              <Image src={item.src} alt={`Image ${imageIndex + 1}`} />
            </ImageBrace>
            <Content>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>

              <Price>{item.price}</Price>
              <ReactionsContainer>
              <LikeItem/>
              <CartItem/>
              </ReactionsContainer>
            </Content>

          
          </Card>
        ))}
      </Row>
    </CarouselContainer>
  );
}
