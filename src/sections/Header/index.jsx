'use client';

import React, { useState, useRef, useEffect } from 'react';
import { headerData } from './data';
import styles from './styles.module.scss';
import { ArrowDownIcon, LanguageIcon } from '@/assets/icons';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(headerData.language.current);
  const languageDropdownRef = useRef(null);

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
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <div className={styles.logo}>{headerData.logo.text}</div>
      <nav className={styles.nav}>
        {headerData.navItems.map((item, index) => (
          <a key={index} href={item.href} className={styles.navItem}>
            {item.label}
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
            <span>{currentLanguage}</span>
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
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
        {headerData.buttons.map((btn, index) => (
          <button key={index} className={styles[btn.variant]}>
            {btn.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

