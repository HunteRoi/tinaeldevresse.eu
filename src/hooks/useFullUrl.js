import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function useFullUrl(uri) {
  const { siteConfig } = useDocusaurusContext();
  let { url } = siteConfig || {};
  
  return `${url}${useBaseUrl(uri)}`;
}
