import { AppProps } from 'next/app';
import { GlobalStyle } from '../components/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
