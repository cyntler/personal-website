require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@cyntler/eslint-config'],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    'import/extensions': 0,
  },
};
