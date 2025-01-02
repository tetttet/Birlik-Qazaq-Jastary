import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import HeaderBar from "./HeaderBar/HeaderBar";
import './Header.css';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    // Обработчик для изменения состояния при прокрутке
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Добавляем слушатель события прокрутки

        return () => {
            window.removeEventListener("scroll", handleScroll); // Убираем слушатель, когда компонент размонтирован
        };
    }, []);

    return (
        <Fragment>
            <header className={`header ${scrolling ? "scrolled" : ""}`}>
                <Navbar />
            </header>
            <HeaderBar />
        </Fragment>
    );
};

export default Header;
