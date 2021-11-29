import { FunctionComponent } from 'react';
import Head from 'next/head';

import { generatePageTitle } from 'src/utils/generatePageTitle';

interface SeoProps {
  title?: string;
}

export const Seo: FunctionComponent<SeoProps> = ({ title }) => {
  const generatedTitle = generatePageTitle(title);

  return (
    <Head>
      <title>{generatedTitle}</title>
      <meta name="og:title" content={generatedTitle} />
    </Head>
  );
};
