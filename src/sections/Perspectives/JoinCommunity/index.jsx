import React from 'react';
import { joinCommunityData } from './data';
import styles from './styles.module.scss';
import { SearchIcon } from '@/assets/icons';

const JoinCommunity = () => {
  return (
    <section className={styles.joinCommunity}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{joinCommunityData.title}</h2>
          <p className={styles.subtitle}>{joinCommunityData.subtitle}</p>
          <form className={styles.form}>
            <input
              type="text"
              placeholder={joinCommunityData.form.placeholder}
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
             {joinCommunityData.form.buttonLabel} <span className={styles.searchIcon}><SearchIcon/></span>
            </button>
          </form>
          <div className={styles.socialLinks}>
            {joinCommunityData.socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index} href={social.href} className={styles.socialLink}>
                  {Icon ? <Icon aria-label={social.name} /> : social.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.visual}>
          <img src={joinCommunityData.visual.src} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
