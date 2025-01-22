import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss";
import BrandLogo from "../BrandLogo/BrandLogo";

const Footer = () => {
    return (
        <Container className={styles["footer-container"]}>
            <Row className={styles["footer-first"]}>
                <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12">
                    <div className={styles["footer-brand"]}>
                        <BrandLogo />
                    </div>
                </Col>
                <Col>
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
