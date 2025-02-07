import { Col, Container, Row } from "reactstrap";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import TextBlock from "../../components/TextBlock/TextBlock";
import styles from "./Home.module.scss";
import classNames from "classnames";
import Projects, { Project } from "../../components/Projects/Projects";

const textBlockItems = [
    {
        heading: "Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor ",
        icon: { url: "./public/misc/3.svg", urlBlack: "./public/misc/3-black.svg", alt: "Design icon" },
    },

    {
        heading: "Construction",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet",
        icon: { url: "./public/misc/1.svg", urlBlack: "./public/misc/1-black.svg", alt: "Maintenance icon" },
    },
    {
        heading: "Maintenance",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing ",
        icon: { url: "./public/misc/2.svg", urlBlack: "./public/misc/2-black.svg", alt: "Construction icon" },
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
                    <div className={styles["blur-bg"]} />
                    <div className={styles["hero-text-wrapper"]}>
                        <div className={styles["hero-text-content"]}>
                            <h1 className={styles["hero-text"]}>We make damn good gardens</h1>
                            <h3 className={styles["hero-subtext"]}>and look good doing them 😎</h3>
                        </div>
                    </div>
                    <PhotoCarousel slideItems={slideItems} />
                </Col>
            </Row>
            <Row className={styles["home-section-container"]}>
                {textBlockItems.map((item, index) => (
                    <Col key={index} xl="4" xs="4" xxl="4" md="4" lg="4" sm="4">
                        <TextBlock heading={item.heading} text={item.text} icon={item.icon} />
                    </Col>
                ))}
            </Row>
            <Row className={classNames(styles["home-section-container"], "mt-0")}>
                <Col xl="12" xs="12" xxl="12" md="12" lg="12" sm="12">
                    <h1 className={styles["section-heading"]}>Our Projects</h1>
                </Col>
            </Row>
            <Row className={classNames(styles["home-section-container"], "mx-5")}>
                <Projects projects={projects} />
            </Row>
        </Container>
    );
};

export default Home;
