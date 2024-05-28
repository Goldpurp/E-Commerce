import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import {
  SaleBanner,
  DiscountText,
  SaleText,
  SummerSale,
} from "./PromoAds.styled";
export default function PromoAds() {
  return (

    <SaleBanner>
      <DiscountText>10-15% OFF</DiscountText>

      <SummerSale>
      <SaleText>SUMMER SALE.</SaleText>
      <ShopNowBtn/>
      </SummerSale>
    </SaleBanner>
  );
}
