import { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import styles from "./PhotoCarousel.module.scss";
import HomeImage1 from "@/assets/home-images/1.jpg";
import HomeImage2 from "@/assets/home-images/2.jpg";
import HomeImage3 from "@/assets/home-images/3.jpg";

export const slideItems = [
    {
        src: HomeImage1,
        altText: "Slide 1",
    },
    {
        src: HomeImage2,
        altText: "Slide 2",
    },
    {
        src: HomeImage3,
        altText: "Slide 3",
    },
];

const PhotoCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slideItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slideItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = slideItems.map((item) => {
        return (
            <CarouselItem className={styles["carousel-item"]} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} className={styles["carousel-img"]} />
            </CarouselItem>
        );
    });

    return (
        <Carousel className={styles["carousel"]} activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={slideItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default PhotoCarousel;
