import {
  Container,
  HeaderText,
  Input,
  Btn,
  Label,
  InputBrace,
  Form,
  Text,
  Bracetwo,
  BackBtn,
  BackBrace
} from "./TrackOrder.styled";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function TrackOrder() {
  return (
    <>
      <BackBrace>
      <IoReturnUpBackOutline />
        <BackBtn>Back</BackBtn>
      </BackBrace>

      <Container>

        <Bracetwo>
          <HeaderText>TRACK MY ORDER</HeaderText>

          <Form>
          <Text>Track item ordered</Text>
            <InputBrace>
              <Label>Enter your order id</Label>
              <Input type="text" placeholder="354653468/AB456" />
            </InputBrace>
            <InputBrace>
              <Label>Enter order address</Label>
              <Input type="email" placeholder="lagos,Ng" />
            </InputBrace>

            <Btn>SUBMIT</Btn>
          </Form>
        </Bracetwo>

      </Container>
    </>

  );
}
