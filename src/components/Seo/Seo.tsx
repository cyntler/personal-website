import Head from 'next/head';
import { FunctionComponent } from 'react';

import { generatePageTitle } from '~/utils/generatePageTitle';
import { getHost } from '~/utils/getHost';

interface SeoProps {
  title?: string;
  description?: string;
}

export const Seo: FunctionComponent<SeoProps> = ({ title, description }) => {
  const generatedTitle = generatePageTitle(title);
  const host = getHost();

  return (
    <Head>
      <title>{generatedTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:image" content={`//${host}/logo.png`} />
      <meta name="og:title" content={generatedTitle} />
      <meta name="og:description" content={description} />
    </Head>
  );
};
