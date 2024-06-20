import {
  Buttons,
  TitleTrends,
  TrendsBrace,
  ButtonContainer,
} from "./TrendsSection.styled";

export default function TrendsSection(){
    return(
        <>
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
        </>
    )
}