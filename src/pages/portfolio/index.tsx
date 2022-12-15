import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';
import useGithubRepositories, { Repository } from '../../hooks/useGithubRepositories';
import RepositoryCard from '../../components/RepositoryCard';

function Portfolio() {
	const maxPerPage = 24;
	const { repositories } = useGithubRepositories('hunteroi', { type: 'owner', sort: 'pushed', direction: 'desc', per_page: maxPerPage, page: 0 });

	const title = translate({
		id: 'portfolio.title',
		message: 'My open-source projects',
		description: "The author's portfolio",
	});
	const description = translate({
		id: 'portfolio.description',
		message: "My {maxPerPage} most up-to-date open-source projects!",
		description: 'A description for the portfolio page'
	});

	return (
		<Layout title={title} description={description}>
			<div className={styles.projects_container}>
				<h2>{title}</h2>
				<h3>{description.replace("{maxPerPage}", maxPerPage.toString())}</h3>
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
