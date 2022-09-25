/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Logo.module.css";
const Logo: DivElement = ({ children, className, ...props }) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Link href={"/"}>
        <a>
          <img alt="logo" src="/assets/images/logo.png" />
        </a>
      </Link>
    </div>
  );
};
export default Logo;
