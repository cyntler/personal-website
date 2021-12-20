import { FunctionComponent } from 'react';

import { Logo } from '~/components/Logo';
import { HeaderContainer } from './Header.style';

export const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Logo asLink="/" />
  </HeaderContainer>
);
