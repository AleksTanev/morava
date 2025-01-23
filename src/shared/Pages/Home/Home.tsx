import { Col, Container, Row } from "reactstrap";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import TextBlock from "../../components/TextBlock/TextBlock";
import styles from "./Home.module.scss";
import classNames from "classnames";
import Projects from "../../components/Projects/Projects";

const textBlockItems = [
    {
        heading: "Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "https://via.placeholder.com/50", alt: "Design icon" },
    },
    {
        heading: "Construction",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "https://via.placeholder.com/50", alt: "Construction icon" },
    },
    {
        heading: "Maintenance",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "https://via.placeholder.com/50", alt: "Maintenance icon" },
    },
];

const Home = () => {
    return (
        <Container className={styles["no-padding"]}>
            <Row className={styles["no-padding"]}>
                <Col className={classNames(styles["carousel-container"], styles["no-padding"], "w-100")}>
                    <div className={styles["hero-text-wrapper"]}>
                        <div className={styles["blur-bg"]}></div>
                        <div className={styles["hero-text-content"]}>
                            <h1 className={styles["hero-text"]}>
                                We make damn <span className="highlight">good gardens</span>
                            </h1>
                            <h3 className={styles["hero-subtext"]}>and look good doing them 😎</h3>
                        </div>
                    </div>
                    <PhotoCarousel />
                </Col>
            </Row>
            <Row>
                {textBlockItems.map((item, index) => (
                    <Col key={index} xl="4" xs="4" xxl="4" md="4" lg="4">
                        <TextBlock heading={item.heading} text={item.text} icon={item.icon} />
                    </Col>
                ))}
            </Row>
            <Projects projects={} />
        </Container>
    );
};

export default Home;
