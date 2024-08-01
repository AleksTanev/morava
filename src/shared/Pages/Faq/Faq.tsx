import {
  Container,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Faq.css";

export interface FaqProps {
  faqText: string;
}

const Faq = () => {
  return (
    <>
      <PageTitle pageTitleText="FAQ" />
      <div className="faq-page">
        <Container>
          <Row className="footer-first">
            <Col
              xxl="9"
              xl="9"
              lg="9"
              md="9"
              sm="12"
              xs="12"
              className="accordion-menu"
            >
              <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Accordion Item 1
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    This is the first item's accordion body. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the .accordion-body, though the transition does limit
                    overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Accordion Item 2
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    This is the second item's accordion body. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the .accordion-body, though the transition does limit
                    overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Accordion Item 3
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    This is the third item's accordion body. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the .accordion-body, though the transition does limit
                    overflow.
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </Col>
            <Col
              xxl="3"
              xl="3"
              lg="3"
              md="3"
              sm="12"
              xs="12"
              className="right-sidebar"
            >
              <span className="column-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Faq;
