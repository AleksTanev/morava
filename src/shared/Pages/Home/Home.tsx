import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles["carousel-container"]}>
            <PhotoCarousel />
        </div>
    );
};

export default Home;
