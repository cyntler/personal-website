import styled from 'styled-components';

import { ASSET_ICONS } from '~/constants';

const { MenuIcon } = ASSET_ICONS;

export const HamburgerMenuButton = styled.button`
  position: fixed;
  background: transparent;
  border: 0;
  cursor: pointer;
  right: var(--spacing-main);
`;

export const HamburgerMenuIcon = styled(MenuIcon)``;
