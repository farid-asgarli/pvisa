import React from "react";
import Router from "next/router";
import { Navbar } from "../../../../models/containers/Navbar";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Link.module.css";
const Link: typeof Navbar.Mobile.Link = ({
  children,
  className,
  active,
  path,
  ...props
}) => {
  return (
    <li
      onClick={() => Router.push(path ?? "/")}
      className={concatStyles(
        styles.Body,
        className,
        active === true ? styles.Active : "undefined"
      )}
      {...props}
    >
      <a className={styles.Link}>{children}</a>
    </li>
  );
};
export default Link;
