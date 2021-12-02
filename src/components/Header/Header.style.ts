import styled from 'styled-components';
import { onScreen } from '~/utils/mediaQuery';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-small);

  ${onScreen('tablet')} {
    padding: var(--spacing-medium);
  }
`;
