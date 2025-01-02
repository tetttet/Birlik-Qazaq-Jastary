import React from 'react';
import styles from './Footer.module.css'; // Подключаем локальные стили для виджета

// Компонент для одного виджета футера
function FooterWidget({ title, children }) {
  return (
    <div className={styles.footerWidget}>
      {title && <h6>{title}</h6>}
      <ul className={styles.links}>
        {children}
      </ul>
    </div>
  );
}

export default FooterWidget;
