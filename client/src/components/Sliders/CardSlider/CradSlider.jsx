import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from './CardSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const CardSlider = () => {
    const { t, i18n } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [translations, setTranslations] = useState({});

    // Функция для получения данных с сервера
    useEffect(() => {
        const fetchPosts = async () => {
            const endpoint = '/api/past_posts';
            try {
                console.log("Fetching posts...");
                const response = await fetch(`http://localhost:8080${endpoint}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched posts:", data);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    // Функция для получения переводов
    const fetchTranslations = async (postId) => {
        const language_code = i18n.language; // Получаем текущий язык
        const response = await fetch(`http://localhost:8080/api/translation_post?post_id=${postId}&language_code=${language_code}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Error fetching translation data");
            return {};
        }
    };

    // Загружаем переводы для всех постов
    useEffect(() => {
        const loadTranslations = async () => {
            // Преобразуем все асинхронные запросы в промисы и ждем их завершения
            const translationsData = await Promise.all(posts.map(async (post) => {
                const translationsForPost = await fetchTranslations(post.id);
                return { [post.id]: translationsForPost };
            }));

            // Преобразуем массив переводов в объект
            const translationsObject = translationsData.reduce((acc, translation) => {
                return { ...acc, ...translation };
            }, {});

            setTranslations(translationsObject);
        };

        if (posts.length > 0) {
            loadTranslations();
        }
    }, [posts, i18n.language]);

    // Настройки для слайдера
    const settings = {
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {posts.map((post, index) => {
                    const translation = translations[post.id]; // Перевод для текущего поста
                    return (
                        <div key={index} className={styles.cardItem}>
                            <Link to="#" className={styles.cardLink}>
                                <img src={post.image_url} alt="Card Image" className={styles.cardImage} />
                                <h2 className={styles.cardTitle}>
                                    {translation?.title || post.title}
                                </h2>
                                <p className={`${styles.badge} ${styles[`badge${post.description}`]}`}>
                                    {translation?.description || post.description}
                                </p>
                                <button className={styles.cardButton}>{t('header.readmore')}</button>
                            </Link>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CardSlider;
