import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotfound = () => {
  const navigate = useNavigate();

  const gotToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="page-not-found">
      <Container>
        <Row xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
          <Col className="page-not-found-text">Page Not Found</Col>
        </Row>
        <Row xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
          <Col className="button-text">
            <Button
              onClick={gotToHomePage}
              className="button-display button-color"
              color="success"
            >
              Go to Home Page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageNotfound;
