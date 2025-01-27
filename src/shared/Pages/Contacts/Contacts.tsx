import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import constants from "../../components/ContactForm/constants";
import ContactForm from "../../components/ContactForm/Contactform";
import styles from "./Contacts.module.scss";

const Contacts = () => {
    const form = useRef<HTMLFormElement>(null);

    const [nameFormError, setNameFormError] = useState("");
    const [emailFormError, setEmailFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [emailNotSend, setEmailNotSend] = useState("");

    const [state, setState] = useState({
        formName: "",
        formEmail: "",
        formMessage: "",
    });

    const isEmailValid = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (state.formName.trim().length < 3) {
            setNameFormError(constants.invalidName);
        }

        if (state.formName.trim().length > 2) {
            setNameFormError("");
        }

        if (!isEmailValid(state.formEmail.trim())) {
            setEmailFormError(constants.invalidEmail);
        }

        if (isEmailValid(state.formEmail.trim())) {
            setEmailFormError("");
        }

        if (form.current === null) return;

        if (state.formName.trim().length > 2 && isEmailValid(state.formEmail.trim())) {
            emailjs.sendForm(constants.serviceID, constants.templateID, form.current, constants.publicKey).then(
                () => {
                    setSuccessMessage(constants.successMessage);
                },
                () => {
                    setEmailNotSend(constants.emailNotSend);
                }
            );
        }
    };

    return (
        <>
            <PageTitle pageTitleText="Contact us" />
            <div className={styles["contact-page"]}>
                <Container>
                    <Row>
                        <Col xxl="3" xl="3" lg="3" md="3" sm="12" xs="12" className={styles["left-sidebar"]}>
                            <WorkingHours />
                        </Col>
                        <Col xxl="9" xl="9" lg="9" md="9" sm="12" xs="12" className={styles["right-sidebar"]}>
                            <ContactForm
                                formRef={form}
                                nameFormError={nameFormError}
                                emailFormError={emailFormError}
                                successMessage={successMessage}
                                emailNotSend={emailNotSend}
                                handleFormSubmit={handleFormSubmit}
                                handleInputChange={handleInputChange}
                                stateFormName={state.formName}
                                stateFormEmail={state.formEmail}
                                stateFormMessage={state.formMessage}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Contacts;
