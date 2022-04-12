import Head from 'next/head';
import { FunctionComponent } from 'react';

import { generatePageTitle } from '~/utils/generatePageTitle';

interface SeoProps {
  title?: string;
  description?: string;
}

export const Seo: FunctionComponent<SeoProps> = ({ title, description }) => {
  const generatedTitle = generatePageTitle(title);

  return (
    <Head>
      <title>{generatedTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:image" content="/logo.png" />
      <meta name="og:title" content={generatedTitle} />
      <meta name="og:description" content={description} />
    </Head>
  );
};
