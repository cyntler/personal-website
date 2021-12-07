import { useRouter } from 'next/router';
import { useMemo } from 'react';

import en from '~/locales/en.json';
import pl from '~/locales/pl.json';

type LocaleMessagesKey = keyof typeof localeMessages;

const localeMessages = {
  en,
  pl,
};

export const useLocale = () => {
  const { locale = '', locales, defaultLocale = 'en' } = useRouter();

  const messages = useMemo(() => {
    const defaultLocaleMessages =
      localeMessages[defaultLocale as LocaleMessagesKey];

    if (!Object.keys(localeMessages).includes(locale)) {
      return defaultLocaleMessages;
    }

    return {
      ...defaultLocaleMessages,
      ...localeMessages[locale as LocaleMessagesKey],
    };
  }, [locale, defaultLocale]);

  return {
    locale,
    locales,
    defaultLocale,
    messages,
  };
};
