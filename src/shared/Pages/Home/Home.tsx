import { Col, Container, Row } from "reactstrap";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import TextBlock from "../../components/TextBlock/TextBlock";
import styles from "./Home.module.scss";
import classNames from "classnames";
import Projects, { Project } from "../../components/Projects/Projects";

const textBlockItems = [
    {
        heading: "Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "./public/misc/secateurs-tool.svg", alt: "Design icon" },
    },
    {
        heading: "Construction",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "./public/misc/rake-tool.svg", alt: "Construction icon" },
    },
    {
        heading: "Maintenance",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: { url: "./public/misc/plant-watering.svg", alt: "Maintenance icon" },
    },
];

const slideItems = [
    {
        src: "./public/home-images/1.jpg",
        altText: "Slide 1",
    },
    {
        src: "./public/home-images/2.jpg",
        altText: "Slide 2",
    },
    {
        src: "./public/home-images/3.jpg",
        altText: "Slide 3",
    },
];

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "./public/projects/project1.jpg",
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "./public/projects/project2.jpg",
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "./public/projects/project3.jpg",
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "./public/projects/project4.jpg",
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
                    <PhotoCarousel slideItems={slideItems} />
                </Col>
            </Row>
            <Row>
                {textBlockItems.map((item, index) => (
                    <Col key={index} xl="4" xs="4" xxl="4" md="4" lg="4">
                        <TextBlock heading={item.heading} text={item.text} icon={item.icon} />
                    </Col>
                ))}
            </Row>
            <Projects projects={projects} />
        </Container>
    );
};

export default Home;
