import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import styles from './CardSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const images = [
    { image: "./assets/images/slider/6.jpg", badge: "Designer", title: "Lorem ipsum dolor sit explicabo adipisicing elit" },
    { image: "./assets/images/slider/7.jpg", badge: "Developer", title: "Lorem ipsum dolor sit explicabo adipisicing elit" },
    { image: "./assets/images/slider/8.jpg", badge: "Marketer", title: "Lorem ipsum dolor sit explicabo adipisicing elit" },
    { image: "./assets/images/slider/9.jpg", badge: "Gamer", title: "Lorem ipsum dolor sit explicabo adipisicing elit" },
    { image: "./assets/images/slider/10.jpg", badge: "Editor", title: "Lorem ipsum dolor sit explicabo adipisicing elit" },
];

const CardSlider = () => {
    const { t } = useTranslation(); // Используем t для получения переведённых строк

    // Настройки для слайдера
    const settings = {
        infinite: true,  // Зацикливание слайдов
        speed: 100,      // Скорость анимации
        slidesToShow: 3, // Показывать 3 карточки за раз
        slidesToScroll: 1, // Прокручивать по 1 карточке за раз
        centerMode: false,  // Центрирование
        arrows: true,       // Показывать стрелки
        dots: true,         // Показывать точки
        autoplay: true,     // Автоматическая прокрутка
        autoplaySpeed: 3000, // Интервал для автоматической прокрутки (в миллисекундах)
        responsive: [
            {
                breakpoint: 768, // Для мобильных устройств
                settings: {
                    slidesToShow: 2, // Показывать 2 карточки на экранах меньше 768px
                }
            },
            {
                breakpoint: 480, // Для очень маленьких экранов
                settings: {
                    slidesToShow: 1, // Показывать 1 карточку на экранах меньше 480px
                }
            }
        ]
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles.cardItem}>
                        <Link to="#" className={styles.cardLink}>
                            <img src={image.image} alt="Card Image" className={styles.cardImage} />
                            <p className={`${styles.badge} ${styles[`badge${image.badge}`]}`}>
                                {image.badge}
                            </p>
                            <h2 className={styles.cardTitle}>{image.title}</h2>
                            <button className={styles.cardButton}>{t('header.readmore')}</button>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
