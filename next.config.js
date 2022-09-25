/** @type {import('next').NextConfig} */
/** @type {import('next-with-less')} */
const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#4383ff",
        "link-color": "#3248e9",
        "border-radius-base": "4px",
      },
    },
  },
  i18n: {
    locales: ["az", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
});
