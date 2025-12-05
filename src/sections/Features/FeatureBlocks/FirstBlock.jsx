import React from 'react';
import { featureBlocksData } from './data';
import styles from './styles.module.scss';
import BackgroundShapes from './BackgroundShapes';
import FeatureCards from './SecondBlock';

const FeatureBlock = () => {
  const block = featureBlocksData;
  return (
    <section className={styles.featureBlock}>
      <div className={styles.container}>

          <div key={block.id} className={styles.block}>
            <BackgroundShapes />
            <div className={styles.content}>
              <div className={styles.badge}>{block.badge}</div>
              <h3 className={styles.title}>{block.title}</h3>
              <p className={styles.description}>{block.description}</p>
            </div>
            <div className={styles.graphic}>
              <img src="/images/featureBlock1.png" alt="featureBlock1" />
            </div>
          </div>
          <FeatureCards />
      </div>
    </section>
  );
};

export default FeatureBlock;
