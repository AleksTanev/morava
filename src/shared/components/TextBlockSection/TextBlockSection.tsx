import { useContext } from "react";
import styles from "@/shared/components/TextBlockSection/TextBlockSection.module.scss";
import { ThemeContext } from "@/shared/contexts/ThemeProvider";
import { Col, Row } from "reactstrap";

interface TextBlockSectionProps {
    textBlockItems: TexBlockItem[]
}

interface TexBlockItem {
    heading: string;
    text: string;
    icon: {
        url: string;
        urlBlack: string;
        alt: string;
    }
}

const TextBlockSection = ({ textBlockItems }: TextBlockSectionProps) => {
    const { theme } = useContext(ThemeContext);
    return textBlockItems.length ? (
        <Row className={styles["text-block-section"]}>
            {textBlockItems.map(({ icon, heading, text }, index) => (
                <Col key={index} xl="4" xs="12" xxl="4" md="4" lg="4" sm="4" className={styles["text-block-container"]}>
                    <div className={styles["text-block"]}>
                        <div className={styles["text-header"]}>
                            <img src={theme === "light" ? icon.urlBlack : icon.url} alt={icon.alt} />
                            <h3 className={styles["block-text-heading"]}>{heading}</h3>
                        </div>
                        <p>{text}</p>
                    </div>
                </Col>
            ))}
        </Row>
    ) : (
        <></>
    );
};

export default TextBlockSection;
