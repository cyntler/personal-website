import { NextPage } from 'next';

import { Seo } from 'src/components/Seo';
import { Layout } from '~/components/Layout';

export const IndexPage: NextPage = () => (
  <>
    <Seo title="Homepage" />
    <Layout>homepage</Layout>
  </>
);

export default IndexPage;
