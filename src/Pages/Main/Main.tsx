
import Hero from "../Hero/Hero";
import PromoAds from "../../component/PromoAds/PromoAds";
import Collections from "../Collections/Collections";
import ProductGallery from "../ProductGallery/ProductGallery";
import ProductGridList from "../ProductGridList/ProductGridList";
import NewArrivalsCards from "../NewArrivalsCards/NewArrivalsCards";
import CategoryShowcase from "../CategoryShowcase/CategoryShowcase";
// import Wishes from "../../component/AutoScrollCarousel/Wishes";

export default function Main() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <NewArrivalsCards/>
      <PromoAds/>
      <Collections/>
      {/* <Wishes/> */}
      <ProductGallery/>
      <ProductGridList/>
    </>
  );
}
