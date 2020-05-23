import React from 'react';
import Link from '@docusaurus/Link';
import styles from './homepage.module.css';
import classnames from 'classnames';

export default function HomePage({ title, tagline, descriptionLines }) {

  return (
    <section className={styles.hero}>
      <Link
        className={classnames('footer__link-item', styles.title)}
        to='/blog'
      >
        <img src='/img/me.jpg' />
        <span>{title}</span>
      </Link>
      <span className={styles.subtitle}>{tagline}</span>
      <hr className={styles.divider} />
      <div className={styles.description}>
        {descriptionLines && descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
      </div>
    </section>
  );
}
