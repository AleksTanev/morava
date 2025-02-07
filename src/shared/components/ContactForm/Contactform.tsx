import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import contacts from "./constants";
import { FormEvent, Ref } from "react";

export interface ContactFormProps {
    formRef: Ref<HTMLFormElement>;
    nameFormError: string;
    emailFormError: string;
    successMessage: string;
    emailNotSend: string;
    handleFormSubmit: (e: FormEvent<Element>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    stateFormName: string;
    stateFormEmail: string;
    stateFormMessage: string;
}

const ContactForm = ({formRef, nameFormError, emailFormError, successMessage, emailNotSend, handleFormSubmit, handleInputChange, stateFormName, stateFormEmail, stateFormMessage}: ContactFormProps) => {

  return (
    <>
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
            <div className="p-3 bg-danger my-2 rounded">{nameFormError}</div>
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
            <div className="p-3 bg-danger my-2 rounded">{emailFormError}</div>
          </Col>
        </Row>
      )}

      {emailNotSend && (
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
            <div className="p-3 bg-danger my-2 rounded">{emailNotSend}</div>
          </Col>
        </Row>
      )}

      {successMessage && (
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
            <div className="p-3 bg-success my-2 rounded">{successMessage}</div>
          </Col>
        </Row>
      )}
      <Form onSubmit={handleFormSubmit} innerRef={formRef}>
        <Input
          id="toName"
          name="toName"
          value={contacts.toName}
          type="hidden"
        />
        <Row>
          <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
            <FormGroup>
              <Label for="exampleEmail">Full Name</Label>
              <Input
                id="formName"
                name="formName"
                value={stateFormName}
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
                value={stateFormEmail}
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
                value={stateFormMessage}
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
    </>
  );
};

export default ContactForm;
