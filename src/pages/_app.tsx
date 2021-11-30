import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

import { GlobalStyle } from '~/components/GlobalStyle';

export const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
