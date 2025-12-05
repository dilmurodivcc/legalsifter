'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { infrastructureData, infrastructureTabsData, businessesTabsData, developersTabsData } from './data';

const RenderInfrastructure = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {item.title}
      </h3>
      <p className={styles.subTitle}>
        {item.subTitle}
      </p>
    </div>
  ));
};

const RenderBusinesses = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {item.title}
      </h3>
      <p className={styles.subTitle}>
        {item.subTitle}
      </p>
    </div>
  ));
};

const RenderDevelopers = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {item.title}
      </h3>
      <p className={styles.subTitle}>
        {item.subTitle}
      </p>
    </div>
  ));
};

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('infrastructure');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const isActiveTab = (tab) => {
    return activeTab === tab;
  };

  return (
    <section className={styles.infrastructure}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <h2 className={styles.title}>{infrastructureData.title}</h2>
            <p className={styles.description}>{infrastructureData.description}</p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${isActiveTab('infrastructure') ? styles.active : ''}`}
            onClick={() => handleTabClick('infrastructure')}
          >
            For Individuals
          </div>
          <div
            className={`${styles.tab} ${isActiveTab('businesses') ? styles.active : ''}`}
            onClick={() => handleTabClick('businesses')}
          >
            For Businesses
          </div>
          <div
            className={`${styles.tab} ${isActiveTab('developers') ? styles.active : ''}`}
            onClick={() => handleTabClick('developers')}
          >
            For Developers
          </div>
        </div>
        <div className={styles.cardContainer}>
          {activeTab === 'infrastructure' && <RenderInfrastructure data={infrastructureTabsData} />}
          {activeTab === 'businesses' && <RenderBusinesses data={businessesTabsData} />}
          {activeTab === 'developers' && <RenderDevelopers data={developersTabsData} />}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
