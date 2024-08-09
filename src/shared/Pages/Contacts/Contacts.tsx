import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
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
      emailjs.sendForm(contacts.serviceID, contacts.templateID, form.current, contacts.publicKey).then(
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
              {nameFormError && (
                <Row>
                  <Col
                    xxl="12"
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12"
                    xs="12"
                    className="error-message"
                  >
                    {nameFormError}
                  </Col>
                </Row>
              )}

              {emailFormError && (
                <Row>
                  <Col
                    xxl="12"
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12"
                    xs="12"
                    className="error-message"
                  >
                    {emailFormError}
                  </Col>
                </Row>
              )}
              <Form onSubmit={handleFormSubmit} innerRef={form}>
                <Input id="toName" name="toName" value={contacts.toName} type="hidden" />
                <Row>
                  <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                    <FormGroup>
                      <Label for="exampleEmail">Full Name</Label>
                      <Input
                        id="formName"
                        name="formName"
                        value={state.formName}
                        placeholder="Full Name"
                        type="text"
                        className="input-form"
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                    <FormGroup>
                      <Label for="formEmail">Email</Label>
                      <Input
                        id="formEmail"
                        name="formEmail"
                        value={state.formEmail}
                        placeholder="Email"
                        type="email"
                        className="input-form"
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <FormGroup>
                      <Label for="formMessage">Your Message</Label>
                      <Input
                        id="formMessage"
                        name="formMessage"
                        value={state.formMessage}
                        placeholder="Your Message"
                        type="textarea"
                        rows="8"
                        className="input-form"
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <Button
                      className="button-display button-color"
                      color="success"
                      onClick={handleFormSubmit}
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contacts;
