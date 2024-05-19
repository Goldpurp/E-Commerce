import Badge1 from "../../component/Badge1/Badge1";
import Badge2 from "../../component/Badge2/Badge2";
import { Container } from "./Badge.styled";
export default function Badge() {
  return (
    <Container>
      <div>
        <Badge1 />
      </div>

      <div>
        <Badge2 />
      </div>
    </Container>
  );
}
