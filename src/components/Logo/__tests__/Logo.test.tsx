import { render, screen } from '@testing-library/react';

import { APP_LOGO_ALT } from '~/constants';
import { Logo } from '../Logo';

test('render logo image', () => {
  render(<Logo />);

  expect(screen.getByAltText(APP_LOGO_ALT)).toBeInTheDocument();
});

test('render logo image with link', () => {
  const link = '/';

  render(<Logo asLink={link} />);

  expect(document.querySelector('a')).toBeInTheDocument();
  expect(document.querySelector('a')?.getAttribute('href')).toBe(link);
  expect(screen.getByAltText(APP_LOGO_ALT)).toBeInTheDocument();
});
