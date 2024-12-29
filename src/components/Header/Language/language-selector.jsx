
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './language-selector.css';

const languages = [
    { code: 'en', lang: 'English', label: '🇺🇸' },
    { code: 'kz', lang: 'Қазақша', label: '🇰🇿' },
    { code: 'ru', lang: 'Русский', label: '🇷🇺' },
    { code: 'tr', lang: 'Türkçe', label: '🇹🇷' }
]


const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false); // Закрываем меню после выбора языка
    };

    const currentLanguage = languages.find((lang) => lang.code === i18n.language);

    return (
        <div className="language-selector">
            {/* Кнопка для отображения текущего языка */}
            <button onClick={() => setIsOpen(!isOpen)} className="language-toggle">
                {/* Показываем флаг текущего языка или казахский флаг по умолчанию */}
                {currentLanguage ? currentLanguage.label : '🇰🇿'}
            </button>
            {isOpen && (
                <div className="language-menu">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-item ${
                                i18n.language === lang.code ? 'selected' : ''
                            }`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            {lang.label} {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

    // return (
    //     <div className='btn-container'>
    //         {
    //             Languages.map((lang) => {
    //                 return <button className={lang.code === i18n.language ? "selected" : ""} key={lang.code} onClick={() => changeLanguage(lang.code)}>{lang.lang}</button>
    //             })
    //         }
    //     </div>
    // );
};

export default LanguageSelector