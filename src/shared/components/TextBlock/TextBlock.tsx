import { useContext } from "react";
import styles from "./TextBlock.module.scss";
import { ThemeContext } from "../../contexts/ThemeProvider";

export interface TextBlockProps {
    heading: string;
    text: string;
    icon: { url: string; urlBlack: string; alt: string };
}

const TextBlock = ({ text, heading, icon }: TextBlockProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles["text-block"]}>
            <div className={styles["text-header"]}>
                <img src={theme === "light" ? icon.urlBlack : icon.url} alt={icon.alt} />
                <h3 className={styles["block-text-heading"]}>{heading}</h3>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default TextBlock;
