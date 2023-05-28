import { AppProps as CustomAppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { withLocales } from 'next-locales';

import { Providers } from '~/components/Providers';
import '~/tailwind.css';

const CustomApp = ({ Component, pageProps }: CustomAppProps) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);

export default withLocales(CustomApp as FunctionComponent);
