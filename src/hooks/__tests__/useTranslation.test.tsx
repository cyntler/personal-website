import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';

import { Providers } from '~/components/Providers';
import { useTranslation } from '../useTranslation';

const translationsMock = {
  test_translation: 'Test',
};

jest.mock('next-export-i18n', () => ({
  useTranslation() {
    return {
      t(key: string) {
        if (translationsMock[key as keyof typeof translationsMock]) {
          return translationsMock[key as keyof typeof translationsMock];
        }

        return key;
      },
    };
  },
}));

const Wrapper: FC = ({ children }) => <Providers>{children}</Providers>;

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
