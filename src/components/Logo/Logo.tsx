/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { getAppConfig } from "../../utils/CommonContent";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Logo.module.css";
const Logo: DivElement = ({ children, className, ...props }) => {
  const { logo, name } = getAppConfig();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Link href={"/"}>
        <a>
          <img
            title={name}
            alt="logo"
            src={logo.file}
            className={styles.Image}
          />
        </a>
      </Link>
    </div>
  );
};
export default Logo;
