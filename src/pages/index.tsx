import { NextPage, NextPageContext } from 'next';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';
import { useTranslation } from '~/hooks/useTranslation';

export const IndexPage: NextPage = () => {
  const t = useTranslation();

  return (
    <>
      <Seo title={t('homepage_title')} />
      <Layout>{t('homepage_title')}</Layout>
    </>
  );
};

export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    locale: context.locale,
  },
});

export default IndexPage;
