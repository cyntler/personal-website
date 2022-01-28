import { NextPage } from 'next';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';
import { useTranslation } from '~/hooks/useTranslation';

export const AboutPage: NextPage = () => {
  const t = useTranslation();

  return (
    <>
      <Seo title={t('about_title')} />
      <Layout>
        <h1>{t('about_title')}</h1>
      </Layout>
    </>
  );
};

export default AboutPage;
