import { t } from "../utils/Localization";

export const menuItems = (
  content: CommonContent.TemplateVariable[]
): MenuLink[] => [
  {
    text: t("nav_menu_blog", content),
    path: "/blog",
  },
  {
    text: t("nav_menu_aboutus", content),
    path: "/about",
  },
  {
    text: t("nav_menu_contacts", content),
    path: "/contact",
  },
  {
    text: t("nav_menu_faq", content),
    path: "/faq",
  },
];
