import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styled from "styled-components";
const FAQS = ({ question, answer }) => {
  return (
    <StyledWrapper className="pt-4">
      <StyledAccordion variant="light">
        <AccordionItem
          className="accordian"
          key="1"
          aria-label="Accordion 1"
          title={question}
          style={{ color: "white" }}
        >
          {answer}
        </AccordionItem>
      </StyledAccordion>
    </StyledWrapper>
  );
};

export default FAQS;
const StyledWrapper = styled.div`
  width: 93%;
  margin: 0 auto;
  padding: 0;
  .text-foreground {
    color: white;
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  box-shadow: -2px 4px 10px -1px rgba(151, 147, 147, 0.1);
  padding: 0 2rem;
  transition: box-shadow 0.3s, background-color 0.3s;
  border: 1px solid white;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #282b31; /* Change to your preferred hover background color */
  }

  .text-default-400 {
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 30px;
  }
  .accordian {
    section {
      width: 95%;
      color: white;
      padding-bottom: 2rem;
    }
  }
`;
