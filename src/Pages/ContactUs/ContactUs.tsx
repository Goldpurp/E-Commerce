import {
  Container,
  HeaderText,
  Input,
  Btn,
  Label,
  InputBrace,
  Form,
  BraceOne,
  Bracetwo,
  TextArea,
  Image,
  BackBtn,
  BackBrace
} from "./ContactUs.styled";
import contactUsIcon from "../../../public/icon/contactUsIcon.jpg"
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function ContactUs() {
  return (
    <>
      <BackBrace>
      <IoReturnUpBackOutline />
        <BackBtn> help center</BackBtn>
      </BackBrace>

      <Container>

        <BraceOne>
          <Image src={contactUsIcon} alt="image" />
        </BraceOne>

        <Bracetwo>
          <HeaderText>CONTACT US </HeaderText>

          <Form>
            <InputBrace>
              <Label>Your name</Label>
              <Input type="text" placeholder="Your name" />
            </InputBrace>
            <InputBrace>
              <Label>Your email address</Label>
              <Input type="email" placeholder="enter your email address" />
            </InputBrace>

            <InputBrace>
              <Label>Your text message</Label>
              <TextArea placeholder="enter your text message"></TextArea>
            </InputBrace>

            <Btn>SUBMIT</Btn>
          </Form>
        </Bracetwo>

      </Container>
    </>

  );
}
