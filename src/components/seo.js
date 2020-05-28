import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useFullUrl from '../hooks/useFullUrl';

export default function SEO({uri, image, type}) {
  const { siteConfig } = useDocusaurusContext();
  const { projectName, customFields: { mType, twitterName }} = siteConfig;

  const metaType = type || mType;
  const metaImage = image ? useFullUrl(image) : null;
  const metaUrl = useFullUrl(uri);

  return (
    <>
      <Head>
        <link rel='canonical' href={metaUrl} />

        <meta property='og:url' content={metaUrl} />
        <meta property='og:image' content={metaImage} />
        
        {metaType && <meta property='og:type' content={metaType} />}
        {projectName && <meta property='og:site_name' content={projectName} />}

        <meta name="twitter:image:alt" content="Banner image" />
        {twitterName && <meta property='twitter:site' content={`@${twitterName}`} /> }
      </Head>
    </>
  );
}