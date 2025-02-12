import { Container, Row, Col } from "reactstrap";
import WorkingHours from "@/shared/components/WorkingHours/WorkingHours";
import styles from "@/shared/Pages/Contacts/Contacts.module.scss";
import ContactFormWrapper from "@/shared/components/ContactFormWrapper/ContactFormWrapper";

const Contacts = () => {
    return (
        <Container className={styles["contact-page"]}>
            <Row>
                <Col xxl="3" xl="3" lg="3" md="3" sm="12" xs="12" className={styles["left-sidebar"]}>
                    <WorkingHours />
                </Col>
                <Col xxl="9" xl="9" lg="9" md="9" sm="12" xs="12" className={styles["right-sidebar"]}>
                    <ContactFormWrapper />
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;
