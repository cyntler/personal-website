import { useIntl } from 'react-intl';

export const useTranslation = () => {
  const { formatMessage } = useIntl();
  type FormatMessageValuesArgument = Parameters<typeof formatMessage>[1];

  return (key: string, values?: FormatMessageValuesArgument): string => {
    const message = formatMessage(
      {
        id: key,
      },
      values,
    );

    if (typeof message === 'string') {
      return message;
    }

    return key;
  };
};
