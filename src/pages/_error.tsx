import { NextPage } from 'next';

import { Layout } from '~/components/Layout';

interface ErrorProps {
  statusCode?: number;
}

export const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <Layout>Error {statusCode}</Layout>
);

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 404;

  if (res) {
    statusCode = res.statusCode;
  } else if (err?.statusCode) {
    statusCode = err.statusCode;
  }

  return { statusCode };
};

export default Error;
