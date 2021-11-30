import { render, screen } from '@testing-library/react';

import { Layout } from '../Layout';

test('render layout header', () => {
  render(<Layout />);

  expect(document.querySelector('header')).toBeDefined();
});

test('render layout children', () => {
  const children = 'Lorem ipsum';

  render(<Layout>{children}</Layout>);

  expect(screen.getByText(children)).toBeDefined();
});
