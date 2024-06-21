import {
  Container,
  HeaderText,
  Input,
  SignUpQuestion,
  Btn,
  Label,
  InputBrace,
  Form,
  Span,
  AgreementSpan,
  Agreement,
  ReactLink,
} from "./SignUp.styled";
export default function SignUp() {
  return (
    <Container>
      <HeaderText>REGISTER ACCOUNT </HeaderText>
      <SignUpQuestion>
        Have account?
        <ReactLink to={"login"}>
         <Span>Login here</Span>
        </ReactLink>
      </SignUpQuestion>

      <Form>
        <InputBrace>
          <Label>Email</Label>
          <Input type="email" placeholder="email address" />
        </InputBrace>
        <InputBrace>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </InputBrace>
        <InputBrace>
          <Label>Phone</Label>
          <Input type="email" placeholder="mobile number" />
        </InputBrace>

        <Btn>Register</Btn>
      </Form>

      <Agreement>
        By selecting Create Account you agree to our{" "}
        <AgreementSpan>Privacy Policy</AgreementSpan> and{" "}
        <AgreementSpan>Terms & Conditions </AgreementSpan>{" "}
      </Agreement>
    </Container>
  );
}
