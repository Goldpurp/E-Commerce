import Showcase1 from "../../component/Showcase1/Showcase1";
import Showcase2 from "../../component/Showcase2/Showcase2";
import { Container } from "./CategoryShowcase.styled";
export default function CategoryShowcase() {
  return (
    <Container>
      <div>
        <Showcase1 />
      </div>

      <div>
        <Showcase2 />
      </div>
    </Container>
  );
}
