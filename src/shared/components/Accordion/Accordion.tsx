import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

const Accordion = () => {
  return (
    <>
      <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            This is the first item's accordion body. You can modify any of this
            with custom CSS or overriding our default variables. It's also worth
            noting that just about any HTML can go within the .accordion-body,
            though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            This is the second item's accordion body. You can modify any of this
            with custom CSS or overriding our default variables. It's also worth
            noting that just about any HTML can go within the .accordion-body,
            though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="accordion-item-border-bottom">
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            This is the third item's accordion body. You can modify any of this
            with custom CSS or overriding our default variables. It's also worth
            noting that just about any HTML can go within the .accordion-body,
            though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </>
  );
};

export default Accordion;
