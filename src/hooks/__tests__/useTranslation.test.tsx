import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';

import { Providers } from '~/components/Providers';
import { useTranslation } from '../useTranslation';

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

const localeMessages = {
  [localeNameMock]: {
    test_translation: 'Test',
  },
};

const Wrapper: FC = ({ children }) => (
  <Providers localeMessages={localeMessages}>{children}</Providers>
);

test('return correct translation', () => {
  const { result } = renderHook(() => useTranslation(), {
    wrapper: Wrapper,
  });

  expect(result.current('test_translation')).toBe('Test');
});

test('return passed key for missing translation', () => {
  const { result } = renderHook(() => useTranslation(), {
    wrapper: Wrapper,
  });

  expect(result.current('missing_translation')).toBe('missing_translation');
});
