import { useRouter } from 'next/router';
import { useMemo } from 'react';

export type LocaleMessages = Record<string, Record<string, string>>;

export const useLocale = (localeMessages: LocaleMessages) => {
  type LocaleMessagesKey = keyof typeof localeMessages;
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
  }, [locale, defaultLocale, localeMessages]);

  return {
    locale,
    locales,
    defaultLocale,
    messages,
  };
};
