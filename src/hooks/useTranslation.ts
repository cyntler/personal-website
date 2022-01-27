import { useTranslation as useNextExportTranslation } from 'next-export-i18n';

interface UseTranslationValues {
  [key: string]: unknown;
}

export const useTranslation = () => {
  const { t } = useNextExportTranslation();

  return (key: string, values?: UseTranslationValues): string => {
    const message = t(key, values);

    if (typeof message === 'string') {
      return message;
    }

    return key;
  };
};
