import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface LocalizationPath {
  localePathname: string | undefined;
  locale: NextRouter["locale"];
  push: NextRouter["push"];
  pathname: string;
}

export default function useLocalizationPath(
  mainLocale: string
): LocalizationPath {
  const { pathname, locale, push } = useRouter();
  const localizationHandler = () => {
    const pathname = window.location.pathname;
    if (locale !== mainLocale) {
      return pathname.substring(3);
    } else {
      return pathname;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocalePathname(localizationHandler());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [localePathname, setLocalePathname] = useState<string>();
  return { localePathname, locale, push, pathname };
}
