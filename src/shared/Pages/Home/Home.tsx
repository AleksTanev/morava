import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page">
            <div className="carousel-container">
                <PhotoCarousel />;
            </div>
        </div>
    );
};

export default Home;
