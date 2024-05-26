import { useState } from "react";
import {
  Btn,
  Icon,
  Done,
  Form,
  Link,
  Text,
  Input,
  Section,
  Youtube,
  Twitter,
  Facebook,
  Snapchat,
  Refrence,
  MailBrace,
  Instagram,
  Pinterest,
  Copyright,
  SectionTitle,
  SectionBrace,
  SectionHeader,
  SectionSocials,
  SectionContent,
  FooterContainer,
  SectionSocialIconBrace,
} from "../Footer/Footer.styled";

export default function Footer() {
  type OpenState = {
    help: boolean;
    company: boolean;
    legal: boolean;
  };

  const [isOpen, setIsOpen] = useState({
    help: false,
    company: false,
    legal: false,
  });

  const toggleSection = (section: keyof OpenState) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <FooterContainer>
      <SectionSocialIconBrace>
        <SectionSocials>
          <Pinterest />
        </SectionSocials>
        <SectionSocials>
          <Youtube />
        </SectionSocials>
        <SectionSocials>
          <Snapchat />
        </SectionSocials>
        <SectionSocials>
          <Instagram />
        </SectionSocials>
        <SectionSocials>
          <Facebook />
        </SectionSocials>
        <SectionSocials>
          <Twitter />
        </SectionSocials>
      </SectionSocialIconBrace>

      <MailBrace>
        <h4>Newslestter + Updates</h4>
        <Form>
          <Input type="email" placeholder="Email address" />
          <Btn>
            <Done />
          </Btn>
        </Form>

        <div>
          <Text>
            By signing up for email, you agree to Fashion Nova's{" "}
            <Refrence href="#">Terms of Service </Refrence> and{" "}
            <Refrence href="#">Privacy Policy</Refrence>. By submitting your
            phone number, you agree to receive recurring automated promotional
            and personalized marketing text messages (e.g. cart reminders) from
            Fashion Nova at the cell number used when signing up. Consent is not
            a condition of any purchase. Reply HELP for help and STOP to cancel.
            Msg frequency varies. Msg & data rates may apply. View{" "}
            <Refrence href="#">Terms</Refrence> &{" "}
            <Refrence href="#">Privacy </Refrence>
          </Text>
        </div>
      </MailBrace>

      <SectionBrace>
        <Section>
          <SectionHeader onClick={() => toggleSection("help")}>
            <SectionTitle>GET HELP</SectionTitle>
            <Icon>{isOpen.help ? "-" : "+"}</Icon>
          </SectionHeader>
          <SectionContent isOpen={isOpen.help}>
            <Link href="#">Help Center</Link>
            <Link href="#">Track Order</Link>
            <Link href="#">Shipping Information</Link>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader onClick={() => toggleSection("company")}>
            <SectionTitle>COMPANY</SectionTitle>
            <Icon>{isOpen.company ? "-" : "+"}</Icon>
          </SectionHeader>
          <SectionContent isOpen={isOpen.company}>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQs</Link>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader onClick={() => toggleSection("legal")}>
            <SectionTitle>LEGAL</SectionTitle>
            <Icon>{isOpen.legal ? "-" : "+"}</Icon>
          </SectionHeader>
          <SectionContent isOpen={isOpen.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Return and refund policy</Link>
          </SectionContent>
        </Section>
      </SectionBrace>

      <Copyright>© 2024 GoldPurp's Vogue, LLC All Rights Reserved</Copyright>
    </FooterContainer>
  );
}
