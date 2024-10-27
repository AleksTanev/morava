import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles["carousel-container"]}>
            <div className={styles["hero-text-wrapper"]}>
                <div className={styles["blur-bg"]}></div>
                <div className={styles["hero-text-content"]}>
                    <h1 className={styles["hero-text"]}>
                        We make damn <span className="highlight">good gardens</span>
                    </h1>
                    <h3 className={styles["hero-subtext"]}>and look good doing them</h3>
                </div>
            </div>
            <PhotoCarousel />
        </div>
    );
};

export default Home;
