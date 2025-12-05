import React from 'react';
import styles from './styles.module.scss';
import { ShortLineLeft, ShortLineRight } from '@/assets/icons';
import { AsSeenOnData } from './data';

const AsSeenOn = () => {
  return (
    <section className={styles.asSeenOn}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <ShortLineLeft />
            <div className={styles.badge}>
              {AsSeenOnData.badge}
            </div>
            <ShortLineRight />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{AsSeenOnData.title}</h2>
            <p className={styles.description}>{AsSeenOnData.description}</p>
          </div>
        </div>

        <div className={styles.gridPanel}>
          <div className={styles.grid}>
            {AsSeenOnData.publications.map((item, index) => {
              const isLastCol = (index + 1) % 5 === 0;
              const isLastRow = index >= AsSeenOnData.publications.length - 5;

              return (
                <div
                  key={item.key}
                  className={`${styles.cell} ${isLastCol ? styles.noRightBorder : ''} ${
                    isLastRow ? styles.noBottomBorder : ''
                  }`}
                >
                  <img className={styles.image} src={item.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
