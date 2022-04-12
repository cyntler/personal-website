/** @type {import('next').NextConfig} */
const { withLocalesConfig } = require('next-locales/server');

module.exports = withLocalesConfig({
  reactStrictMode: true,
});
