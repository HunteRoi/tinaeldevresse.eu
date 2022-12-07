import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';
import HomePage from '../components/Homepage';

function Home() {
	const context = useDocusaurusContext();
	let { siteConfig } = context;

	siteConfig.title = translate({
		id: 'global.title',
		message: siteConfig.title,
		description: 'The website title',
	});
	siteConfig.tagline = translate({
		id: 'global.tagline',
		message: siteConfig.tagline,
		description: 'The website tagline',
	});
	siteConfig.customFields.description = translate({
		id: 'global.description',
		message: siteConfig.customFields.description as string,
		description: 'The website description',
	});
	const lines = [
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: 'Developer, teacher, dreamer & tech lover.',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_2',
			message: 'I maintain a blog about things I learn or I want to share.',
			description: 'The second line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_3',
			message: 'I love participating at dev events',
			description: 'The third line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_4',
			message: 'and I am also an open-source enthusiast.',
			description: 'The fourth line of description',
		}),
	];

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description as string}
		>
			<main className={styles.heroContainer}>
				<HomePage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default Home;
