import { useRef, useState } from "react";
import ContactForm from "@/shared/components/ContactForm/ContactForm.tsx";
import constants from "@/shared/components/ContactForm/constants.ts";
import emailjs from "@emailjs/browser";

const ContactFormWrapper = () => {
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
    );
};


export default ContactFormWrapper