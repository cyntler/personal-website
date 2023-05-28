import { useTranslation } from 'next-locales';
import { withLocalesStaticProps } from 'next-locales/server';

import { Layout } from '~/components/Layout';
import { Seo } from '~/components/Seo';

const Custom404 = () => {
  const { t } = useTranslation();

  const errorTitle = t('error.title', { statusCode: 404 });

  return (
    <>
      <Seo title={errorTitle} />
      <Layout>
        <div>{errorTitle}</div>
      </Layout>
    </>
  );
};

export const getStaticProps = withLocalesStaticProps();

export default Custom404;
