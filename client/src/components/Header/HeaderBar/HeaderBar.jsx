import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const { t } = useTranslation(); // Используем t для получения переведённых строк

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className={styles['headerbar']}>
            <div className={styles['headerbar-breadcrumb-wrapper']}>
                <div className={styles['headerbar-breadcrumb']}>
                    Turkey &gt; <Link to="#">{t('header.home')}</Link> &gt; <Link to="#">{t('header.goAbroad')}</Link> &gt; {t('header.volunteering')}
                </div>
            </div>

            <div className={styles['headerbar-header']}>
                <div className={styles['headerbar-logo']}>
                    <div>Birlik</div>
                    <div>Qazaq</div>
                    <div>Jastary</div>
                </div>

                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t('header.searchPlaceholder')}
                        className="w-[300px] sm:w-[400px] group-hover:w-[500px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-1 focus:border-primary h-[45px]"
                    />

                    <IoMdSearch className='text-black-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5' />
                </div>
                <div className={styles['headerbar-questions']}>{t('header.questions')}</div>
            </div>

            <div className={styles['headerbar-navMenu']}>
                {/* About Us */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('aboutUs')}>
                    <Link to="#">{t('header.aboutUs')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'aboutUs' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'aboutUs' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.ourMission')}</Link>
                            <Link to="#">{t('header.history')}</Link>
                            <Link to="#">{t('header.team')}</Link>
                        </div>
                    )}
                </div>

                {/* Get Involved */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('getInvolved')}>
                    <Link to="#">{t('header.getInvolved')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'getInvolved' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'getInvolved' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.volunteer')}</Link>
                            <Link to="#">{t('header.donate')}</Link>
                            <Link to="#">{t('header.partner')}</Link>
                        </div>
                    )}
                </div>

                {/* News */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('news')}>
                    <Link to="#">{t('header.news')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'news' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'news' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.latestUpdates')}</Link>
                            <Link to="#">{t('header.pressReleases')}</Link>
                        </div>
                    )}
                </div>

                {/* Events */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('events')}>
                    <Link to="#">{t('header.events')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'events' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'events' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.upcomingEvents')}</Link>
                            <Link to="#">{t('header.pastEvents')}</Link>
                        </div>
                    )}
                </div>

                {/* Stories */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('stories')}>
                    <Link to="#">{t('header.stories')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'stories' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'stories' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.successStories')}</Link>
                            <Link to="#">{t('header.personalExperiences')}</Link>
                        </div>
                    )}
                </div>

                {/* Accounts */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('accounts')}>
                    <Link to="#">{t('header.accounts')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'accounts' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'accounts' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.createAccount')}</Link>
                            <Link to="#">{t('header.login')}</Link>
                            <Link to="#">{t('header.forgotPassword')}</Link>
                        </div>
                    )}
                </div>

                {/* Contact */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('contact')}>
                    <Link to="#">{t('header.contact')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'contact' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'contact' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.contactUs')}</Link>
                            <Link to="#">{t('header.support')}</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
