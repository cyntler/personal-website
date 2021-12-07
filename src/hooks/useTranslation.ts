import { useIntl } from 'react-intl';

export const useTranslation = () => {
  const { formatMessage } = useIntl();

  return (
    key: string,
    values?: Parameters<typeof formatMessage>[1],
  ): string => {
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
