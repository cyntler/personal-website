import { NextPage } from 'next';
import {
  withLocalesStaticProps,
  withLocalesStaticPaths,
} from 'next-locales/server';
import { useTranslation } from 'next-locales';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';

const AboutPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('about.title')} />
      <Layout>
        <h1>{t('about.title')}</h1>
      </Layout>
    </>
  );
};

export const getStaticProps = withLocalesStaticProps();
export const getStaticPaths = withLocalesStaticPaths();

export default AboutPage;
