import { heroData } from './data';
import styles from './styles.module.scss';
import { LineLeft, LineRight, PlayIcon } from '@/assets/icons';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <LineLeft />
          <div className={styles.badge}>
            {heroData.badge.text}
          </div>
          <LineRight />
        </div>
        <h1 className={styles.title}>{heroData.title}</h1>
        <p className={styles.subtitle}>{heroData.subtitle}</p>
        <div className={styles.videoContainer}>
          <PlayIcon style={{ width: '100px', height: '100px' }} />
        </div>

      </div>
      <Link href={heroData.cta.href} className={styles.ctaButton}>
        {heroData.cta.label}
      </Link>
    </section>
  );
};

export default Hero;

