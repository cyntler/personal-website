import { FunctionComponent } from 'react';

import { Header } from '~/components/Header/Header';
import { Container, Content } from './Layout.style';

export const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);
