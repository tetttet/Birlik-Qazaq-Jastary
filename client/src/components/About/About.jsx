import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const About = () => {
    const { t } = useTranslation(); // Используем t для перевода
    let Image = './assets/images/Slider/4.jpg';

    return (
        <div className={styles.aboutUs}>
            <div className={styles.about}>
                <img src={Image} alt="About us" className={styles.pic} />
                <div className={styles.text}>
                    <h3>Birlik <span>Q</span>azaq Jastary</h3>
                    <h5>
                        {t("about.heading1")} <span>{t("about.heading2")}</span>
                    </h5>
                    <p>
                        {t("about.description")}
                    </p>
                    <div className={styles.data}>
                        <a href="#" className={styles.aboutBtn}>
                            {t("about.button")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
