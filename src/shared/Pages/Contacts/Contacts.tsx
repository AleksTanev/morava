export interface ContactsProps {
  contactsText: string;
}

const Contacts = ({ contactsText }: ContactsProps) => {
  return <>{contactsText}</>;
};

export default Contacts;
