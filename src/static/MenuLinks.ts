import Locales from "../localization/locales";

export const menuItems = (locale: DefaultLocale): MenuLink[] => [
  {
    text: Locales[locale].Nav_Menu_Blog,
    path: "/blog",
  },
  {
    text: Locales[locale].Nav_Menu_AboutUs,
    path: "/about",
  },
  {
    text: Locales[locale].Nav_Menu_Contacts,
    path: "/contact",
  },
  {
    text: Locales[locale].Nav_Menu_FAQ,
    path: "/faq",
  },
];
