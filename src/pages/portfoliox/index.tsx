import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';
import useGithubRepositories, { Repository } from '../../hooks/useGithubRepositories';
import RepositoryCard from '../../components/RepositoryCard';

function Portfolio() {
	const context = useDocusaurusContext();
	const maxPerPage = 24;
	const { repositories } = useGithubRepositories('hunteroi', { type: 'owner', sort: 'pushed', direction: 'desc', per_page: maxPerPage, page: 0 });

	let { siteConfig } = context;
	siteConfig.title = translate({
		id: 'global.title',
		message: siteConfig.title,
		description: 'The website title',
	});
	siteConfig.customFields.description = translate({
		id: 'global.description',
		message: siteConfig.customFields.description as string,
		description: 'The website description',
	});

	return (
		<Layout title={siteConfig.title} description={siteConfig.customFields.description as string}>
			<div className={styles.projects_container}>
				<h2>My open-source projects</h2>
				<h3>The {maxPerPage} most up-to-date</h3>
				<section>
					<div role='projects'>
						{repositories.length > 0 ? repositories.map((repo: Repository, i: number) => <RepositoryCard key={i} repository={repo} />) : <p>Loading...</p>}
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Portfolio;
