import { FunctionComponent } from 'react';
import { IntlProvider } from 'react-intl';

import { LocaleMessages, useLocale } from '~/hooks/useLocale';

interface ProvidersProps {
  localeMessages: LocaleMessages;
}

export const Providers: FunctionComponent<ProvidersProps> = ({
  children,
  localeMessages,
}) => {
  const { locale, defaultLocale, messages } = useLocale(localeMessages);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
      onError={() => null}
    >
      {children}
    </IntlProvider>
  );
};
