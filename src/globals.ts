import getConfig from "next/config";

const {
  publicRuntimeConfig: { env },
} = getConfig();
/**
 * Copy of ENV Keys (the ones will be used during the application's lifetime) should be added into the list.
 */
const URL_ENV = <const>[
  "ABOENAURL",
  "ACEIMAGEURL",
  "ACEURL",
  "BLOGSURL",
  "COMBINATIONSURL",
  "COMBINATIONSLEGACYURL",
  "FORMSURL",
  "COMMONCONTENTURL",
];

const TOKEN_ENV = <const>["COMBINATIONSTOKEN", "ABOENATOKEN"];

export const UrlCollection = URL_ENV.reduce<{
  readonly [K in typeof URL_ENV[number]]?: string;
}>((prev, current) => ({ ...prev, [current]: env[current] }), {});

export const AuthTokens = TOKEN_ENV.reduce<{
  readonly [K in typeof TOKEN_ENV[number]]?: string;
}>((prev, current) => ({ ...prev, [current]: env[current] }), {});
