import NewArrivalsCarousel from "../NewArrivalsCarousel/NewArrivalsCarousel";
import Badge from "../Badge/Badge";
import Collections from "../Collections/Collections";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Section from "../ProductGridList/ProductGridList";
import Footer from "../../component/Footer/Footer";

import {
  Buttons,
  TrendsBrace,
  TitleTrends,
  ButtonContainer,
} from "./Main.styled";
import DecorativeText from "../../component/DecorativeText/DecorativeText";
import PromoAds from "../../component/PromoAds/PromoAds";
import SectionsGrid from "../SectionsGrid/SectionsGrid";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Badge />
      <DecorativeText/>
      <NewArrivalsCarousel/>
      <PromoAds/>
      <Collections/>
      <SectionsGrid/>
      <TrendsBrace>
        <div>
          <TitleTrends>Latest Trends</TitleTrends>
        </div>
        <ButtonContainer>
          <Buttons>Best Sellers</Buttons>
          <Buttons>Sale</Buttons>
          <Buttons>Graphics</Buttons>
          <Buttons>Jeans</Buttons>
        </ButtonContainer>
      </TrendsBrace>
      <Section/>
      <Footer/>
      
    </>
  );
}
