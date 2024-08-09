import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import ContactForm from "../../components/ContactForm/ContactForm";
import contacts from "../../components/ContactForm/constants";
import "./Contacts.css";

export interface ContactsProps {
  contactsText: string;
}

const Contacts = ({ contactsText }: ContactsProps) => {
  const form = useRef<HTMLFormElement>(null);

  const [nameFormError, setNameFormError] = useState("");
  const [emailFormError, setEmailFormError] = useState("");

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
      setNameFormError("Invalid name!");
    }

    if (state.formName.trim().length > 2) {
      setNameFormError("");
    }

    if (!isEmailValid(state.formEmail.trim())) {
      setEmailFormError("Invalid email format!");
    }

    if (isEmailValid(state.formEmail.trim())) {
      setEmailFormError("");
    }

    if (form.current === null) return;

    if (
      state.formName.trim().length > 2 &&
      isEmailValid(state.formEmail.trim())
    ) {
      emailjs
        .sendForm(
          contacts.serviceID,
          contacts.templateID,
          form.current,
          contacts.publicKey
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <PageTitle pageTitleText="Contact us" />
      <div className="contact-page">
        <Container>
          <Row>
            <Col
              xxl="3"
              xl="3"
              lg="3"
              md="3"
              sm="12"
              xs="12"
              className="left-sidebar"
            >
              <WorkingHours />
            </Col>
            <Col
              xxl="9"
              xl="9"
              lg="9"
              md="9"
              sm="12"
              xs="12"
              className="right-sidebar"
            >
              <ContactForm
                formRef={form}
                nameFormError={nameFormError}
                emailFormError={emailFormError}
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
