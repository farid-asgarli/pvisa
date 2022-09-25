import React from "react";
import DesktopDropdown from "../../containers/Navbar/Desktop/Dropdown/Dropdown";
import DesktopItem from "../../containers/Navbar/Desktop/Item/Item";
import DesktopLink from "../../containers/Navbar/Desktop/Link/Link";
import MobileItem from "../../containers/Navbar/Mobile/Item/Item";
import MobileLink from "../../containers/Navbar/Mobile/Link/Link";
import MobileMenu from "../../containers/Navbar/Mobile/Menu/Menu";

type NavbarComponent = {
  Desktop: {
    Item: DivElement<{
      commonPageProps: CommonPageProps;
    }>;
    Link: React.FC<
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        active?: boolean;
        path?: string;
        activeClassName?: string;
      }
    >;
    Dropdown: DivElement<{
      locale: string;
      localePathname?: Indefinable<string>;
    }>;
  };
  Mobile: {
    Item: DivElement<{
      commonPageProps: CommonPageProps;
    }>;
    Link: React.FC<
      React.LiHTMLAttributes<HTMLLIElement> & {
        active?: boolean;
        path?: string;
      }
    >;
    Menu: DivElement<{
      visible: boolean;
      setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    }>;
  };
};

export const Navbar: NavbarComponent = {
  Desktop: {
    Item: DesktopItem,
    Link: DesktopLink,
    Dropdown: DesktopDropdown,
  },
  Mobile: {
    Item: MobileItem,
    Link: MobileLink,
    Menu: MobileMenu,
  },
};
