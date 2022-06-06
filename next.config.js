/** @type {import('next').NextConfig} */
const { join } = require('path');
const { withLocalesConfig } = require('next-locales/server');

module.exports = withLocalesConfig({
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: join(__dirname, '/node_modules/react'),
      'react-dom': join(__dirname, '/node_modules/react-dom'),
    };
  },
});
