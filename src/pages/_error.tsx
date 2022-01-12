import { NextPage } from 'next';

import { Layout } from '~/components/Layout';

interface ErrorProps {
  statusCode?: number;
}

export const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <Layout>
    <h1>Error {statusCode}</h1>
  </Layout>
);

Error.getInitialProps = ({ res, err }) => ({
  statusCode: res?.statusCode ?? err?.statusCode ?? 404,
});

export default Error;
