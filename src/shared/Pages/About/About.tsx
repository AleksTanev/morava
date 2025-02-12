import { Container, Row, Col } from "reactstrap";
import PageTitle from "@/shared/components/PageTitle/PageTitle";
import styles from "@/shared/Pages/About/About.module.scss";

const About = () => {
    return (
        <div className={styles["about-page"]}>
            <PageTitle pageTitleText="About" />
            <Container>
                <Row>
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12" className={styles["col-padding"]}>
                        <span className={styles["about-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12">
                        Picture
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
