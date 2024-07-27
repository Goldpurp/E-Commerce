import { useState } from "react";
import {
  Answer,
  FAQContainer,
  FAQItem,
  Question,
  QuestionContainer,
  Title,
  ToggleIcon,
} from "./FAQ.styled";

export default function FAQ() {
  const faqData = [
    {
      question: "What is GoldPurp's Vogue?",
      answer:
        "GoldPurp's Vogue is the premier quick-to-market apparel and lifestyle brand, dedicated to delivering the latest and most sought-after fashion items to customers around the globe.",
    },
    {
      question: "Where is GoldPurp's Vogue located?",
      answer: "We are based in Lagos, Nigeria.",
    },
    {
      question: "What types of collections do you offer?",
      answer:
        "We offer collections for women, men, curve, and kids. We cater to anyone who has an affinity for fashion, regardless of shape, personal style, or gender.",
    },
    {
      question: "How often do you introduce new styles?",
      answer:
        "We introduce 1,000+ new arrivals to our site every week! We are always finding innovative ways to improve and deliver the most coveted styles at a moment’s notice.",
    },
    {
      question: "How does Your Vogue engage the community?",
      answer:
        "We make our customers part of the conversation from concept to delivery. By staying ahead of the fashion curve and engaging with our community every day, we ensure that we deliver what our customers need as fast as possible.",
    },
    {
      question: "How has GoldPurp's Vogue revolutionized fashion?",
      answer:
        "We've revolutionized the fashion industry by offering a wide range of sizes and styles, many of which are often ignored by other retailers. Our dedication to inclusivity and affordability has set us apart.",
    },
    {
      question: "What is the mission of GoldPurp's Vogue?",
      answer:
        "Our mission is to make affordable fashion accessible to customers around the world, ensuring that everyone feels confident and included.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <QuestionContainer onClick={() => handleToggle(index)}>
            <Question>{item.question}</Question>
            <ToggleIcon isOpen={openIndex === index}>+</ToggleIcon>
          </QuestionContainer>
          {openIndex === index && <Answer>{item.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
}
