'use client';

import React, { useState, useRef, useEffect } from 'react';
import { headerData } from './data';
import styles from './styles.module.scss';
import { ArrowDownIcon, LanguageIcon } from '@/assets/icons';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || headerData.language.current);
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleLangChange = (lng) => setCurrentLanguage(lng || headerData.language.current);
    setCurrentLanguage(i18n.language || headerData.language.current);
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <div className={styles.logo}>{t('header.logo', { defaultValue: headerData.logo.text })}</div>
      <nav className={styles.nav}>
        {headerData.navItems.map((item, index) => (
          <a key={index} href={item.href} className={styles.navItem}>
            {t(`header.nav.${item.key}`, { defaultValue: item.label })}
            {item.hasDropdown && <ArrowDownIcon />}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <div 
          className={styles.languageSelect} 
          ref={languageDropdownRef}
        >
          <button 
            className={`${styles.languageButton} ${isLanguageOpen ? styles.open : ''}`}
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            <LanguageIcon />
            <span>{t(`header.language.${currentLanguage}`, { defaultValue: currentLanguage.toUpperCase() })}</span>
            <ArrowDownIcon />
          </button>
          {isLanguageOpen && (
            <div className={styles.languageDropdown}>
              {headerData.language.options.map((lang) => (
                <button
                  key={lang}
                  className={`${styles.languageOption} ${currentLanguage === lang ? styles.active : ''}`}
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {t(`header.language.${lang}`, { defaultValue: lang.toUpperCase() })}
                </button>
              ))}
            </div>
          )}
        </div>
        {headerData.buttons.map((btn, index) => (
          <button key={index} className={styles[btn.variant]}>
            {t(`header.buttons.${btn.key}`, { defaultValue: btn.label })}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
