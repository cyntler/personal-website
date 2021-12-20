import { FunctionComponent } from 'react';

import { Header } from '~/components/Header';
import { LayoutContainer, LayoutContent } from './Layout.style';

export const Layout: FunctionComponent = ({ children }) => (
  <LayoutContainer>
    <Header />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);
