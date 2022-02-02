const en = require('./translations.en.json');
const pl = require('./translations.pl.json');

const translations = {
  en,
  pl,
};

const defaultLang = Object.keys(translations)[0];

module.exports = {
  translations,
  defaultLang,
  useBrowserDefault: true,
};
