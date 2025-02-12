import { Container, Row, Col } from "reactstrap";
import "@/shared/components/PageTitle.css";

export interface PageTitleProps {
  pageTitleText: string;
}

const PageTitle = ({ pageTitleText }: PageTitleProps) => {
  return (
    <div className="page-title-component">
      <Container>
        <Row className="page-title">
          <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12" className="column-title">
            {pageTitleText}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTitle;
