import PageTitle from "../../components/PageTitle/PageTitle";

export interface ContactsProps {
  contactsText: string;
}

const Contacts = ({ contactsText }: ContactsProps) => {
  return (
    <>
      <PageTitle pageTitleText="Contact us" />
      {contactsText}
    </>
  );
};

export default Contacts;
