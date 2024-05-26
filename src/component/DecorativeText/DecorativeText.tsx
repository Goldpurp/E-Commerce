import {
  Container,
  DecorativeContainer,
  Line,
  StyledText,
} from "./DecorativeText.styled";
export default function DecorativeText() {
  return (
    <Container>
      <DecorativeContainer>
        <Line />
        <StyledText>New Arrivals</StyledText>
        <Line />
      </DecorativeContainer>
    </Container>
  );
}
