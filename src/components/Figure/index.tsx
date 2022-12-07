import React from 'react';

import styles from './styles.module.css';

function getTagAccordingToDataType(data) {
	if (typeof data !== 'object' || !data.type) return <></>;

	switch (data.type) {
		case 'image':
		case 'img':
			return data.url ? (
				<a href={data.url} target='_blank'>
					<img {...data} />
				</a>
			) : (
				<img {...data} />
			);

		case 'video':
			return (
				<video controls width={data.width}>
					{data.sources && Array.isArray(data.sources) ? (
						data.sources.map((s) => <source src={s.src} type={s.type} />)
					) : (
						<source {...data} />
					)}
				</video>
			);

		case 'audio':
			return (
				<audio controls>
					{data.sources && Array.isArray(data.sources) ? (
						data.sources.map((s) => <source src={s.src} type={s.type} />)
					) : (
						<source {...data} />
					)}
				</audio>
			);

		case 'html':
			return (
				<div className={styles.container}>
					<iframe {...data}></iframe>
				</div>
			);

		default:
			return (
				<object
					data={data.value}
					width={data.width}
					height={data.height}
				></object>
			);
	}
}

export default function Figure({ data, children }) {
	if (!data && !children) return <></>;

	return (
		<figure>
			{data && getTagAccordingToDataType(data)}

			<figcaption className={styles.legend}>{children}</figcaption>
		</figure>
	);
}
