
import Hero from "../Hero/Hero";
import PromoAds from "../../component/PromoAds/PromoAds";
import Collections from "../Collections/Collections";
import TrendsSection from "../../component/TrendsSection/TrendsSection";
import ProductGallery from "../ProductGallery/ProductGallery";
import DecorativeText from "../../component/DecorativeText/DecorativeText";
import ProductGridList from "../ProductGridList/ProductGridList";
import NewArrivalsCards from "../NewArrivalsCards/NewArrivalsCards";
import CategoryShowcase from "../CategoryShowcase/CategoryShowcase";

export default function Main() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <DecorativeText/>
      <NewArrivalsCards/>
      <PromoAds/>
      <Collections/>
      <ProductGallery/>
      <TrendsSection/>
      <ProductGridList/>
    </>
  );
}
