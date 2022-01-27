import { NextPage } from 'next';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';
import { useTranslation } from '~/hooks/useTranslation';

export const IndexPage: NextPage = () => {
  const t = useTranslation();

  return (
    <>
      <Seo title={t('homepage_title')} />
      <Layout>
        <h1>{t('homepage_title')}</h1>
      </Layout>
    </>
  );
};

export default IndexPage;
