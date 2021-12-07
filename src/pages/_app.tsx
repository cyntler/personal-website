import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

import { GlobalStyle } from '~/components/GlobalStyle';
import { Providers } from '~/components/Providers';

export const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Providers>
      <Component {...pageProps} />
    </Providers>
  </>
);

export default App;
