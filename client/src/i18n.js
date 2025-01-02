import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
    .use(Backend) // Подключаем загрузку переводов из файлов
    .use(LanguageDetector) // Определяем язык пользователя
    .use(initReactI18next) // Интеграция с react-i18next
    .init({
        debug: true, // Включаем отладку
        lng: "ru", // Язык по умолчанию
        fallbackLng: "ru", // Резервный язык
        returnObjects: true, // Для возврата сложных объектов в переводах
        backend: {
            // Настройка путей к JSON-файлам
            loadPath: '/locales/{{lng}}/{{ns}}.json', // URL для загрузки переводов
        },
        ns: ['home', 'about'], // Пространства имен, которые мы используем
        defaultNS: 'home', // Пространство имен по умолчанию
        interpolation: {
            escapeValue: false, // Не экранировать значения
        },
    });

export default i18n;
