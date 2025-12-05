'use client';

import React from 'react';
import { footerData } from './data';
import styles from './styles.module.scss';
import { ArrowRight, BackToTop } from '@/assets/icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.brand}>
          <img className={styles.logo} src="/icons/OzakAiLogo.svg" alt="" width="140px"/>
            <p className={styles.brandDescription}>{footerData.brand.description}</p>
            <div className={styles.newsletter}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}><ArrowRight/></button>
            </div>
            <div className={styles.socialLinks}>
              {footerData.socialLinks.map(({ icon: Icon, href, name }) => (
                <a key={name} href={href} className={styles.socialLink} aria-label={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>Quick Links</div>
            {footerData.quickLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>AI Agents</div>
            {footerData.aiAgents.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>Extras</div>
            {footerData.extras.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div></div>
          <div className={styles.legalLinks}>
            {footerData.legal.map((link, index) => (
              <a key={index} href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <BackToTop/> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
