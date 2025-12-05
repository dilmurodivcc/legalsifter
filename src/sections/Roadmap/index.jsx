import React from 'react';
import styles from './styles.module.scss';
import { ShortLineLeft, ShortLineRight } from '@/assets/icons';
import { roadmapData } from './data';

const Roadmap = () => {
  return (
    <section className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
          <ShortLineLeft />
            <div className={styles.badge}>
               {roadmapData.badge.text}
            </div>
            <ShortLineRight />
            </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{roadmapData.title}</h2>
          <p className={styles.description}>{roadmapData.description}</p>
        </div>
        </div>
        <div className={styles.cards}>
          {roadmapData.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardId}>{card.id}</div>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardStatus}>{card.status}</div>
              </div>
              <div className={styles.cardSteps}>
                {card.steps.map((step) => (
                  <div key={step} className={styles.cardStep}>{step}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Roadmap;

