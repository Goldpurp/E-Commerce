// import Img1 from "../../../public/Cards/ads-1.png";
// import Img2 from "../../../public/Cards/Ads-2.png";
// import Img3 from "../../../public/Cards/Ads-4.png";
// import Img4 from "../../../public/Cards/Ads-4.png";
import Img4 from "../../../public/Products/1.png";
import {
  Image,
  Label,
  Price,
  Brace,
  Bonus,
  OldPrice,
  ShopItemBag,
  CarouselBtn,
  CarouselBox,
  CarouselItem,
  CarouselWrapper,
  ShopItemBagBrace,
  CarouselBtnBrace,
  CarouselContainer,
} from "./ProductGridList.styled";

const productList = [
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
];

export default function ProductGridList() {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        {productList.map((item, itemIndex) => (
          <CarouselItem key={itemIndex}>
            <CarouselBox>
              <Image src={item.src} alt="image" />
              <ShopItemBagBrace>
                <ShopItemBag />
              </ShopItemBagBrace>
            </CarouselBox>
            <Brace>
              <Label>{item.label}</Label>
              <Price>
                {" "}
                ₦{item.price}
                <OldPrice> ₦{item.oldPrice}</OldPrice>
              </Price>
              <Bonus>{item.bonus}</Bonus>
            </Brace>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <CarouselBtnBrace>
        <CarouselBtn> Show more</CarouselBtn>
      </CarouselBtnBrace>
    </CarouselContainer>
  );
}
