import { render, screen } from '@testing-library/react';

import { Providers } from '../Providers';

const localeNameMock = 'locale-name';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: localeNameMock,
      locales: [localeNameMock],
      defaultLocale: localeNameMock,
    };
  },
}));

test('render children of Providers component', () => {
  const children = 'Lorem ipsum';

  render(<Providers localeMessages={{}}>{children}</Providers>);

  expect(screen.getByText(children)).toBeInTheDocument();
});
