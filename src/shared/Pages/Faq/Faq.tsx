import { Container, Row, Col } from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import Accordion from "../../components/Accordion/Accordion";
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
              <Accordion />
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
