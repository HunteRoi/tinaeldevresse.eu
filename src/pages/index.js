import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

import HomePage from '../components/homepage';

const lines = [
  'Student, developer, tech lover.',
  'I maintain a blog about things I learn.',
  'I love participating at dev events',
  'and I am also an open-source enthusiast.',
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields.description}
    >
      <main className={styles.heroContainer}>
        <HomePage {...siteConfig} descriptionLines={lines} />
      </main>
    </Layout>
  );
}

export default Home;
