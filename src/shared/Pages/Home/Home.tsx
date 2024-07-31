import { Container, Row } from "reactstrap";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import "./Home.css";

const Home = () => {
    return (
        <Container className="home-page">
            <Row className="carousel-container">
                <PhotoCarousel />;
            </Row>
        </Container>
    );
};

export default Home;
