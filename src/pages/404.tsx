import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function NotFound() {
	const title = translate({
		id: 'notfound.title',
		message: 'Oops! Page Not Found.',
		description: 'The title of the Not Found page',
	});
	const description = translate({
		id: 'notfound.description',
		message: 'Sorry, we lost ourselves on the path. Maybe we should...',
		description: 'The description of the Not Found page',
	});

	const goBack = () => window.history.back();
	const refresh = () => window.location.reload();

	return (
		<Layout
			title={title}
			description={description}
		>
			<main className={styles.heroContainer}>
				<h1>{title}</h1>
				<p>
					{description}
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
