import { Col, Container, Row } from "reactstrap";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import "./Home.css";

const Home = () => {
    return (
        <Container className="carousel-container">
            <Row>
                <Col>
                    <PhotoCarousel />;
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
