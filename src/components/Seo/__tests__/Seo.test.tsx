import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { APP_NAME } from '~/constants';
import { getMetaTagContentByName } from '~/utils/getMetaTagContentByName';
import { Seo } from '../Seo';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  },
}));

beforeEach(() => {
  render(<Seo />, {
    container: document.head,
  });
});

test('set document title', () => {
  expect(document.title).toBe(APP_NAME);
});

test('set meta og:title tag', () => {
  expect(getMetaTagContentByName('og:title')).toBe(APP_NAME);
});
