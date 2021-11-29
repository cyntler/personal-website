import { NextPage } from 'next';

import { Seo } from 'src/components/Seo/Seo';
import { Layout } from '~/components/Layout/Layout';

const IndexPage: NextPage = () => {
  return (
    <>
      <Seo title="Homepage" />
      <Layout>homepage</Layout>
    </>
  );
};

export default IndexPage;
