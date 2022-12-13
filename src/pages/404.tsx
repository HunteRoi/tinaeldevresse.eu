import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function NotFound() {
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

	const goBack = () => window.history.back();
	const refresh = () => window.location.reload();

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description as string}
		>
			<main className={styles.heroContainer}>
				<h1>
					<Translate
						id='notfound.title'
						description='The title of the Not Found page'
					>
						Oops! Page Not Found.
					</Translate>
				</h1>
				<p>
					<Translate
						id='notfound.description'
						description='The description of the Not Found page'
					>
						Sorry, we lost ourselves on the path. Maybe we should...
					</Translate>
					<button onClick={goBack}>
						<Translate
							id='notfound.buttons.goback'
							description='The go-back button of the Not Found page'
						>
							Go back
						</Translate>
					</button>
					<button onClick={refresh}>
						<Translate
							id='notfound.buttons.reload'
							description='The reload button of the Not Found page'
						>
							Try again
						</Translate>
					</button>
				</p>
			</main>
		</Layout>
	);
}

export default NotFound;
