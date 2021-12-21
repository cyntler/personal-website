import { FunctionComponent } from 'react';

import { Logo } from '~/components/Logo';
import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer } from './Header.style';

export const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Logo asLink="/" />
    <HamburgerMenu />
  </HeaderContainer>
);
