import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
    const images = [
        "./assets/images/slider/1.jpg",
        "./assets/images/slider/2.jpg",
        "./assets/images/slider/3.jpg",
        "./assets/images/slider/4.jpg",
        "./assets/images/slider/5.jpg",
    ];

    // Массив с динамическими ссылками для каждой картинки
    const links = [
        "/", // Ссылка для первой картинки
        "/", // Ссылка для второй картинки
        "/", // Ссылка для третьей картинки
        "/", // Ссылка для четвертой картинки
        "/", // Ссылка для пятой картинки
    ];

    const [active, setActive] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const lengthItems = images.length;

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % lengthItems);
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.left = `-${active * 100}%`;
        }
    }, [active]);

    const handleDotClick = (index) => {
        setActive(index);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 5000);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderList} ref={sliderRef}>
                {images.map((src, index) => (
                    <div className={styles.sliderItem} key={index}>
                        <Link to={links[index]}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.sliderButtons}>
                <button
                    className={styles.sliderButton}
                    id="prev"
                    onClick={prevSlide}
                >
                    {"<<"}
                </button>
                <button
                    className={styles.sliderButton}
                    id="next"
                    onClick={nextSlide}
                >
                    {">"}
                </button>
            </div>
            <ul className={styles.sliderDots}>
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={
                            index === active
                                ? `${styles.sliderDot} ${styles.sliderDotActive}`
                                : styles.sliderDot
                        }
                        onClick={() => handleDotClick(index)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default ImageSlider;
