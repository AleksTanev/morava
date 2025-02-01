import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <Container className={styles["footer-container"]}>
            <Row className={styles["footer-first"]}>
                <Col xxl="3" xl="3" lg="3" md="3" sm="12" xs="12"></Col>
                <Col xxl="9" xl="9" lg="9" md="9" sm="12" xs="12">
                    <span className={styles["column-title"]}>Contact us</span>
                </Col>
            </Row>
            <Row className={styles["footer-second"]}>
                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    Copyright 2024 © Morava | All rights reserved
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
