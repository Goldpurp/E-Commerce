import {
  Container,
  HeaderText,
  Input,
  SignUpQuestion,
  Btn,
  Label,
  InputBrace,
  Form,
  Problems,
  Span,
  ProblemSpan,
  AgreementSpan,
  Agreement,
//   ReactLink,
} from "./Login.styled";
export default function Login() {
  return (
    <Container>
      <HeaderText>LOGIN ACCOUNT </HeaderText>
      <SignUpQuestion>
        New here? 
        {/* <ReactLink to={"signUp"}>
        </ReactLink> */}
          <Span>Sign up</Span>
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

        <Btn>Access</Btn>
      </Form>

      <Problems>
        Promblem trying to access? <ProblemSpan>Reset password</ProblemSpan>{" "}
      </Problems>

      <Agreement>
        By selecting Create Account you agree to our{" "}
        <AgreementSpan>Privacy Policy</AgreementSpan> and{" "}
        <AgreementSpan>Terms & Conditions </AgreementSpan>{" "}
      </Agreement>
    </Container>
  );
}
