import PageTitle from "@/shared/components/PageTitle/PageTitle";
import { Container, Row, Col } from "reactstrap";
import styles from "@/shared/Pages/Services/Services.module.scss";

const Services = () => {
    return (
        <div className={styles["services-page"]}>
            <PageTitle pageTitleText="Services" />
            <Container>
                <Row className={styles["row-padding"]}>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12" className={styles["col-padding"]}>
                        <span className={styles["services-title"]}>Service 1</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12" className={styles["col-padding"]}>
                        <span className={styles["services-title"]}>Service 2</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12">
                        <span className={styles["services-title"]}>Service 3</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                </Row>

                <Row className={styles["row-padding"]}>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12" className={styles["col-padding"]}>
                        <span className={styles["services-title"]}>Service 4</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12" className={styles["col-padding"]}>
                        <span className={styles["services-title"]}>Service 5</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="12" sm="12" xs="12" className={styles["services-text"]}>
                        <span className={styles["services-title"]}>Service 6</span>
                        <br />
                        <span className={styles["services-text"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
