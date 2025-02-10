import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <Container className={styles["footer-container"]}>
            <Row className={styles["footer-second"]}>
                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    Copyright 2024 © Morava | All rights reserved
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
