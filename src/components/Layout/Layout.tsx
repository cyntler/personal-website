import { FunctionComponent } from 'react';

import { Header } from '~/components/Header';
import { PropsWithChildrenOnly } from '~/constants';
import { LayoutContainer, LayoutContent } from './Layout.style';

export const Layout: FunctionComponent<PropsWithChildrenOnly> = ({
  children,
}) => (
  <LayoutContainer>
    <Header />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);
