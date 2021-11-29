import { FunctionComponent } from 'react';

import { Container } from './Header.style';
import { Logo } from '~/components/Logo/Logo';

export const Header: FunctionComponent = () => (
  <Container>
    <Logo asLink="/" />
  </Container>
);
