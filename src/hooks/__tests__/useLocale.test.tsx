import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';

import { Providers } from '~/components/Providers';
import { useLocale } from '../useLocale';

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

test('return valid data object', () => {
  const { result } = renderHook(() => useLocale(localeMessages), {
    wrapper: Wrapper,
  });

  expect(result.current.locale).toBe(localeNameMock);
  expect(result.current.locales?.includes(localeNameMock)).toBeTruthy();
  expect(result.current.defaultLocale).toBe(localeNameMock);
  expect(result.current.messages).toMatchObject(localeMessages[localeNameMock]);
});
