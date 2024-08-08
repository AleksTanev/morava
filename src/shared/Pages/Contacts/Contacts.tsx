import { useState } from "react";
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
import "./Contacts.css";

export interface ContactsProps {
  contactsText: string;
}

const Contacts = ({ contactsText }: ContactsProps) => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formName);
    console.log(formEmail);
    console.log(formMessage);
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
              <h3>
                <span>Office Working</span> Hours
              </h3>
              <p>
                <strong>Monday:</strong> 9:00 am – 5:00 pm
              </p>
              <p>
                <strong>Tuesday:</strong> 9:00 am – 5:00 pm
              </p>
              <p>
                <strong>Wednesday:</strong> 9:00 am – 5:00 pm
              </p>
              <p>
                <strong>Thursday:</strong> 9:00 am – 5:00 pm
              </p>
              <p>
                <strong>Friday:</strong> 9:00 am – 5:00 pm
              </p>
              <p>
                <strong>Saturday:</strong> 9:00 am – 2:00 pm
              </p>
              <p>
                <strong>Sunday:</strong> Holiday
              </p>
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
              <Form onSubmit={sendForm}>
                <Row>
                  <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                    <FormGroup>
                      <Label for="exampleEmail">Full Name</Label>
                      <Input
                        id="formName"
                        name="formName"
                        placeholder="Full Name"
                        type="text"
                        className="input-form"
                        onChange={(event) => setFormName(event.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                    <FormGroup>
                      <Label for="formEmail">Email</Label>
                      <Input
                        id="formEmail"
                        name="formEmail"
                        placeholder="Email"
                        type="email"
                        className="input-form"
                        onChange={(event) => setFormEmail(event.target.value)}
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
                        placeholder="Your Message"
                        type="textarea"
                        rows="8"
                        className="input-form"
                        onChange={(event) => setFormMessage(event.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                    <Button
                      className="button-display button-color"
                      color="success"
                      onClick={sendForm}
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
