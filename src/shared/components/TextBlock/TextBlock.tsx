import styles from "./TextBlock.module.scss";

export interface TextBlockProps {
    heading: string;
    text: string;
    icon: { url: string; alt: string };
}

const TextBlock = ({ text, heading, icon }: TextBlockProps) => {
    return (
        <div className={styles["text-block"]}>
            <img src={icon.url} alt={icon.alt} />
            <h2 className={styles["block-text-heading"]}>{heading}</h2>
            <p>{text}</p>
        </div>
    );
};

export default TextBlock;
