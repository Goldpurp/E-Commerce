import NewArrivalsCarousel from "../NewArrivalsCarousel/NewArrivalsCarousel";
import Badge from "../Badge/Badge";
import Collections from "../Collections/Collections";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Section from "../ProductGridList/ProductGridList";
import Footer from "../../component/Footer/Footer";

import {
  // H1,
  // Dot,
  // Line,
  // Span,
  // HrLines,
  Buttons,
  TrendsBrace,
  TitleTrends,
  // LineContainer,
  ButtonContainer,
} from "./Main.styled";
import DecorativeText from "../../component/DecorativeText/DecorativeText";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Badge />

      {/* <LineContainer>
        <Line>
          <Dot />{" "}
          <span>
            <HrLines />
          </span>{" "}
          <Dot />
        </Line>
        <H1>
          {" "}
          <Span>New</Span> Arrivals
        </H1>
        <Line>
          <Dot />{" "}
          <span>
            <HrLines />
          </span>{" "}
          <Dot />
        </Line>
      </LineContainer> */}

      <DecorativeText/>


      <NewArrivalsCarousel/>

      <TrendsBrace>
        <div>
          <TitleTrends>Now Trending</TitleTrends>
        </div>
        <ButtonContainer>
          <Buttons>Best Sellers</Buttons>
          <Buttons>Sale</Buttons>
          <Buttons>Graphics</Buttons>
          <Buttons>Jeans</Buttons>
        </ButtonContainer>
      </TrendsBrace>

      <Section/>

      <Collections/>




      <Footer/>
      
    </>
  );
}
