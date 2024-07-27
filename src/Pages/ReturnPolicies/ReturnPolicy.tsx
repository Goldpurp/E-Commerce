import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  AccordionContent,
  AccordionHeading,
  AccordionSection,
  Button,
  Container,
  Content,
  Heading,
  Paragraph,
  Sidebar,
  SidebarHeading,
  SidebarList,
  SidebarListItem,
} from "./ReturnPolicy.styled";
import { useState } from "react";

export default function ReturnPolicy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <Content>
        <Heading>OUR RETURN POLICY AND PROCESS</Heading>
        <Paragraph>
          Quickly and easily return your item(s) through our Returns Portal!
          Only US customers will be able to purchase a return shipping label but
          the returns portal is open to all customers.
        </Paragraph>
        <Button>Start return</Button>
        <Paragraph>
          You have 30 days from the date of delivery to return your item.
        </Paragraph>
        <Paragraph>
          Returns are refunded via store credit in the form of a GoldPurp's
          Vogue gift card. Returns are processed within 5-7 business days after
          your item(s) are delivered to us. To receive your store credit more
          quickly, use the prepaid return label option in our Returns Portal
          below!
        </Paragraph>
        <Paragraph>
          Please note: Please ensure to package each order separately. If
          multiple orders are returned inside a single return package, your
          return will require additional time to process. You will not receive
          credit for any non-eligible items returned.
        </Paragraph>

        {[
          "Can I purchase a return shipping label?",
          "Can I exchange items?",
          "What items are final sale?",
          "Should I know anything else about the Online Return Policy?",
          "What is the Store Returns Policy?",
          "What about returning online orders in store?",
          "Reserved Rights Regarding Returns",
        ].map((question, index) => (
          <AccordionSection key={index}>
            <AccordionHeading onClick={() => toggleAccordion(index)}>
              {question}
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </AccordionHeading>
            <AccordionContent isOpen={activeIndex === index}>
              <Paragraph>[Insert detailed answer here.]</Paragraph>
            </AccordionContent>
          </AccordionSection>
        ))}
      </Content>

      <Sidebar>
        <SidebarHeading>Suggested Articles</SidebarHeading>
        <SidebarList>
          {[
            "I have a problem with my return",
            "How refunds work",
            "Our return policy and process",
            "My order was returned to sender or refused",
            "Track my return",
          ].map((item, index) => (
            <SidebarListItem key={index}>{item}</SidebarListItem>
          ))}
        </SidebarList>
      </Sidebar>
    </Container>
  );
}
