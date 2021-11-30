import { render, screen } from '@testing-library/react';

import { APP_LOGO_ALT } from '~/constants';
import { Logo } from '../Logo';

beforeEach(() => {});

test('render logo image', () => {
  render(<Logo />);

  expect(screen.getByAltText(APP_LOGO_ALT)).toBeDefined();
});

test('render logo image with link', () => {
  const link = '/';

  render(<Logo asLink={link} />);

  expect(document.querySelector('a')).toBeDefined();
  expect(document.querySelector('a')?.getAttribute('href')).toBe(link);
  expect(screen.getByAltText(APP_LOGO_ALT)).toBeDefined();
});
