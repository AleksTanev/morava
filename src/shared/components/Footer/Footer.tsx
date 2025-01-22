import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss";
import BrandLogo from "../BrandLogo/BrandLogo";

const Footer = () => {
    return (
        <Container className={styles["footer-container"]}>
            <Row xxl="3" xl="3" lg="3" md="3" sm="2" xs="1" className={styles["footer-first"]}>
                <Col>
                    <div className={styles["footer-brand"]}>
                        <BrandLogo />
                    </div>
                </Col>
                <Col>
                    <span className={styles["column-title"]}>Contact us</span>
                </Col>
            </Row>
            <Row xxl="1" xl="1" lg="1" md="1" sm="1" xs="1" className={styles["footer-second"]}>
                <Col>Copyright 2024 © Morava | All rights reserved</Col>
            </Row>
        </Container>
    );
};

export default Footer;
