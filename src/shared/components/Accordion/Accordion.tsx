import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import styles from "./Accordion.module.scss";

const accordionData = [
    {
        header: "How do I get started?",
        body: "You can send us an email at morava@gmail.com or call us at 123-456-7890. You can also send us a message through our contact form.",
    },
    {
        header: "What if I have a problem with my order?",
        body: "If you have a problem with your order, please contact us immediately. We will do our best to resolve the issue as quickly as possible.",
    },
    {
        header: "Where do you operate?",
        body: "We operate in Sofia, Bulgaria and we are looking to expand to other cities in the future.",
    },
];

const Accordion = () => {
    return (
        <UncontrolledAccordion className={styles["accordion-container"]} toggle={console.log} defaultOpen={["0"]} stayOpen>
            {accordionData.map((item, index) => (
                <AccordionItem className={styles["accordion-item"]} key={index}>
                    <AccordionHeader targetId={index.toString()}>{item.header}</AccordionHeader>
                    <AccordionBody className={styles["accordion-button"]} accordionId={index.toString()}>
                        {item.body}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </UncontrolledAccordion>
    );
};

export default Accordion;
