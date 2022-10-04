import React from "react";
import Logo from "../../../../components/Logo/Logo";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { Navbar } from "../../../../models/containers/Navbar";
import { menuItems } from "../../../../static/MenuLinks";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Item.module.css";
const Item: typeof Navbar.Desktop.Item = ({
  children,
  className,
  commonPageProps: {
    routerProps: { locale, pathname, localePathname },
    templateVariables,
  },
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Inner}>
          <Logo />
          <div className={styles.MenuLinks}>
            {menuItems(templateVariables).map((x, i) => (
              <Navbar.Desktop.Link
                key={i}
                active={x.path === "/" + pathname.split("/")[1]}
                children={x.text}
                path={x.path}
                className={styles.Link}
              />
            ))}
          </div>
          {locale && (
            <Navbar.Desktop.Dropdown
              locale={locale}
              localePathname={localePathname}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};
export default Item;
