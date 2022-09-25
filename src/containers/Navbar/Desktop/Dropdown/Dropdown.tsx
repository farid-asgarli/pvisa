import React from "react";
import { Navbar } from "../../../../models/containers/Navbar";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Dropdown.module.css";
import { Dropdown as AntDropdown, Menu } from "antd";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
import Locales from "../../../../localization/locales";

const Dropdown: typeof Navbar.Desktop.Dropdown = ({
  children,
  className,
  locale,
  localePathname,
  ...props
}) => {
  const languagesList = Object.keys(Locales);

  const langDropDown = (locale: Indefinable<string>) => {
    const localeDropDown = languagesList.map((l) => ({
      locale: l,
      text: l,
      link: localePathname!,
    }));

    return localeDropDown?.filter((x) => x.locale !== locale);
  };

  const langMenu = (
    <Menu>
      {langDropDown(locale)?.map((x, i) => (
        <Menu.Item key={i}>
          <Link href={x.link} locale={x.locale}>
            <a className={styles.Link}>{x.text}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <AntDropdown
        trigger={["click", "hover"]}
        overlay={langMenu}
        placement="bottom"
        className={styles.Dropdown}
      >
        <span>
          <span>{languagesList.find((x) => x === locale) ?? locale}</span>
          <CaretDown className={styles.DropdownIcon} />
        </span>
      </AntDropdown>
    </div>
  );
};
export default Dropdown;
