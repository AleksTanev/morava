import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "../../../assets/2.png";

const Footer = () => {
  return (
    <div className={styles["footer-page"]}>
      <Container>
        <Row className={styles["footer-first"]}>
          <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12">
            <Link to="/" className={styles["footer-brand"]}>
              <img src={Logo} alt="Morava" />
            </Link>
          </Col>
          <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12">
            <span className={styles["column-title"]}>Contact us</span>
          </Col>
          <Col xxl="4" xl="4" lg="4" md="4" sm="12" xs="12"></Col>
        </Row>
        <Row>
          <Col
            xxl="12"
            xl="12"
            lg="12"
            md="12"
            sm="12"
            xs="12"
            className={styles["footer-second"]}
          >
            Copyright 2024 © Morava | All rights reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
