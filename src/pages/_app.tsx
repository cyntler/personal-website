import { AppProps as CustomAppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { withLocales } from 'next-locales';

import { GlobalStyle } from '~/components/GlobalStyle';
import { Providers } from '~/components/Providers';

const CustomApp = ({ Component, pageProps }: CustomAppProps) => (
  <>
    <GlobalStyle />
    <Providers>
      <Component {...pageProps} />
    </Providers>
  </>
);

export default withLocales(CustomApp as FunctionComponent);
