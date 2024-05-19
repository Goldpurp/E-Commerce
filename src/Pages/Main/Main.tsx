import Carousel from "../../component/Carousel/Carousel";
import Badge from "../Badge/Badge";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import {
  LineContainer,
  Line,
  HrLines,
  Dot,
  H1,
  Span,
  ButtonContainer,
  Buttons,
  TrendsBrace,
  TitleTrends,
} from "./Main.styled";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Badge />

      <LineContainer>
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
      </LineContainer>

      <Carousel />

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
    </>
  );
}
