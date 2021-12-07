import { FunctionComponent } from 'react';
import { IntlProvider } from 'react-intl';

import { useLocale } from '~/hooks/useLocale';

export const Providers: FunctionComponent = ({ children }) => {
  const { locale, defaultLocale, messages } = useLocale();

  console.log(messages);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  );
};
