"use client"
import React from 'react';
import { perspectivesData } from './data';
import styles from './styles.module.scss';
import grafic from '@/assets/icons/grafic.webp';
import JoinCommunity from './JoinCommunity';
import { useTranslation } from 'react-i18next';
const Perspectives = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.perspectives}>
      <img src={grafic?.src || grafic} alt="" className={styles.grafic} />
      {/* <img src="/images/neyrolines.svg" alt="" className={styles.neyrolines}/> */}
      <div className={styles.pipes} />
      <div className={styles.leftNode} />
      <div className={styles.rightNode} />
      <div className={styles.container}>
        <h2 className={styles.title}>{t('perspectives.title', { defaultValue: perspectivesData.title })}</h2>
        <div className={styles.quotes}>
          {perspectivesData.quotes.map((quote) => (
            <div key={quote.id} className={styles.quoteCard}>
              <p className={styles.quote}>"{t(`perspectives.quotes.${quote.id}.quote`, { defaultValue: quote.quote })}"</p>
              <div className={styles.bottom}>
                <img src={quote.logo} alt="" />
                <div className={styles.author}>- {t(`perspectives.quotes.${quote.id}.author`, { defaultValue: quote.author })}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JoinCommunity />

    </section>
  );
};

export default Perspectives;
