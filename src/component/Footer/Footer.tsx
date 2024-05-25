import { useState } from "react";
import {
  FooterContainer,
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
  Copyright,
  Arrow,
} from "../Footer/Footer.styled";

export default function Footer() {
  const [openSection, setOpenSection] = useState<boolean>(false);

  const toggleSection = (prevState) => {
    setOpenSection(prevState === section ? null : section);
  };

  return (
    <FooterContainer>
      <Section>
        <SectionHeader onClick={() => toggleSection("help")}>
          <SectionTitle>GET HELP</SectionTitle>
          <Arrow isOpen={openSection === "help"}>+</Arrow>
        </SectionHeader>
        <SectionContent isOpen={openSection === "help"}>
          <a
            href="https://example.com/help-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Center
          </a>
          <a
            href="https://example.com/track-order"
            target="_blank"
            rel="noopener noreferrer"
          >
            Track Order
          </a>
          <a
            href="https://example.com/shipping-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shipping Info
          </a>
          <a
            href="https://example.com/returns"
            target="_blank"
            rel="noopener noreferrer"
          >
            Returns
          </a>
          <a
            href="https://example.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </SectionContent>
      </Section>

      <Copyright>© 2024 GoldPurp's Vogue, LLC All Rights Reserved</Copyright>
    </FooterContainer>
  );
}
