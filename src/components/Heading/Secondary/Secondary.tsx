import Title from "antd/lib/typography/Title";
import Link from "next/link";
import React from "react";
import { Heading } from "../../../models/components/Heading";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Secondary.module.css";
const Secondary: typeof Heading.Secondary = ({
  children,
  className,
  size = "md",
  weight = "medium",
  ...props
}) => {
  function sizeMapper(value: typeof size): string {
    switch (value) {
      case "sm":
        return styles.Small;
      case "md":
        return styles.Mid;
      case "lg":
        return styles.Large;
    }
  }

  function weightMapper(value: typeof weight): string {
    switch (value) {
      case "light":
        return styles.Light;
      case "medium":
        return styles.Medium;
      case "bold":
        return styles.Bold;
    }
  }

  const element = (
    <Title
      className={concatStyles(
        styles.Body,
        className,
        sizeMapper(size),
        weightMapper(weight)
      )}
      {...props}
    >
      {children}
    </Title>
  );

  return props.as === "anchor" ? (
    <Link href={props.href}>
      <a>{element}</a>
    </Link>
  ) : (
    element
  );
};
export default Secondary;
