import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

import { GlobalStyle } from '~/components/GlobalStyle';
import { Providers } from '~/components/Providers';
import { getLocaleMessages } from '~/utils/getLocaleMessages';

const localeMessages = getLocaleMessages();

export const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Providers localeMessages={localeMessages}>
      <Component {...pageProps} />
    </Providers>
  </>
);

export default App;
