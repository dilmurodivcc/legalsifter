"use client";

import { heroData } from './data';
import styles from './styles.module.scss';
import { LineLeft, LineRight, PlayIcon } from '@/assets/icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <LineLeft />
          <div className={styles.badge}>
            {t('hero.badge', { defaultValue: heroData.badge.text })}
          </div>
          <LineRight />
        </div>
        <h1 className={styles.title}>{t('hero.title', { defaultValue: heroData.title })}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle', { defaultValue: heroData.subtitle })}</p>
        <div className={styles.videoContainer}>
          <PlayIcon style={{ width: '100px', height: '100px' }} />
        </div>

      </div>
      <Link href={heroData.cta.href} className={styles.ctaButton}>
        {t('hero.cta', { defaultValue: heroData.cta.label })}
      </Link>
    </section>
  );
};

export default Hero;
