import React from 'react';
import FooterWidget from './FooterWidget'; // Импортируем компонент FooterWidget
import styles from './Footer.module.css'; // Подключаем локальные стили для футера
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

function Footer() {
    let logo = require('./../../assets/logo/mini-white-logo-removebg.png');
    const { t } = useTranslation(); // Используем t для перевода

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {/* Первый виджет */}
                    <div className={styles.footerWidget}>
                        <Link to="#">
                            <img
                                src={logo}
                                className={styles.logo}
                                alt="Logo"
                            />
                        </Link>
                        <p className={styles.desc}>
                            {/* Пример использования динамического значения */}
                            {t('footer.aboutUs')}
                        </p>
                        <ul className={styles.socials}>
                            <li><Link to="#"><IoLogoFacebook size={30} /></Link></li>
                            <li><Link to="#"><IoLogoTwitter size={30} /></Link></li>
                            <li><Link to="#"><IoLogoInstagram size={30} /></Link></li>
                            <li><Link to="#"><IoLogoLinkedin size={30} /></Link></li>
                        </ul>
                    </div>

                    {/* Виджет "Quick Links" */}
                    <FooterWidget title={t('footer.quickLinks')}>
                        <li><Link to="#">{t('footer.home')}</Link></li>
                        <li><Link to="#">{t('footer.about')}</Link></li>
                        <li><Link to="#">{t('footer.service')}</Link></li>
                        <li><Link to="#">{t('footer.testimonial')}</Link></li>
                        <li><Link to="#">{t('footer.contact')}</Link></li>
                    </FooterWidget>

                    {/* Виджет "Services" */}
                    <FooterWidget title={t('footer.services')}>
                        <li><Link to="#">{t('footer.webDesign')}</Link></li>
                        <li><Link to="#">{t('footer.webDevelopment')}</Link></li>
                        <li><Link to="#">{t('footer.seoOptimization')}</Link></li>
                        <li><Link to="#">{t('footer.blogWriting')}</Link></li>
                    </FooterWidget>

                    {/* Виджет "Help & Support" */}
                    <FooterWidget title={t('footer.helpSupport')}>
                        <li><Link to="#">{t('footer.supportCenter')}</Link></li>
                        <li><Link to="#">{t('footer.liveChat')}</Link></li>
                        <li><Link to="#">{t('footer.faq')}</Link></li>
                        <li><Link to="#">{t('footer.termsConditions')}</Link></li>
                    </FooterWidget>
                </div>

                {/* Copyright Section */}
                <div className={styles.copyrightWrapper}>
                    <p>
                        Design and Developed by <Link to="#" target="_blank">Birlik QazaQ Jastary</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
