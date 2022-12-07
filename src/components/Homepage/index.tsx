import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';
import Newsletter from '../Newsletter';
import config from '../../../website_config.json';

export default function HomePage({ title, tagline, descriptionLines }) {
    return (
        <section className={styles.hero}>
            <Link
                className={clsx('footer__link-item', styles.title)}
                to='/blog'
            >
                <img src={require('@site/static/img/me.jpg').default} />
                <span>{title}</span>
            </Link>
            <span className={styles.subtitle}>{tagline}</span>
            <hr className={styles.divider} />
            <div className={styles.description}>
                {descriptionLines &&
                    descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
            </div>

            <div className={styles.description}>
                <Newsletter url={config.MAILCHIMP_URL} />
            </div>
        </section>
    );
}
