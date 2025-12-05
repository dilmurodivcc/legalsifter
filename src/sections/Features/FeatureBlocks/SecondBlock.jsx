import React from 'react';
import styles from './styles.module.scss';
import { featureCardsData } from './data';

const FeatureCards = () => (
  <div className={styles.cardsGrid}>
    {featureCardsData.map((card) => (
      <article key={card.id} className={styles.card}>
        <div className={styles.cardGlow} />
        <div className={styles.cardTop}>
          <div className={styles.cardSeal}>
            <img src={card.imgSrc1} className={styles.seal} alt="" />
          </div>
          <div className={styles.cardIllustration}>
            <img src={card.imgSrc2} className={styles.illustration} alt="" />
          </div>
        </div>
        <div className={styles.cardBadge}>{card.badge}</div>
        <h3 className={styles.cardTitle}>
          <span className={styles.cardTitleHighlight}>{card.title}</span>
        </h3>
        <div className={styles.cardDescription}>
          {card.description.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export default FeatureCards;
