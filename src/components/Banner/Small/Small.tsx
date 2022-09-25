import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import React from "react";
import { Banner } from "../../../models/components/Banner";
import { Button } from "../../../models/components/Button";
import { concatStyles } from "../../../utils/Concatinator";
import Overlay from "../../Overlay/Overlay";
import Wrapper from "../../Wrapper/Wrapper";
import styles from "./Small.module.css";
const Small: typeof Banner.Small = ({
  children,
  className,
  imageUrl,
  buttonProps,
  style,
  ...props
}) => {
  const { push } = useRouter();

  return (
    <div
      className={concatStyles(styles.Body, className)}
      style={{
        backgroundImage: `url(${imageUrl})`,
        ...style,
      }}
      {...props}
    >
      <Overlay />
      <Wrapper>
        <div className={styles.Content}>
          <Title className={styles.Heading}>{children}</Title>
          {buttonProps && (
            <Button.Secondary
              className={concatStyles(styles.Button, buttonProps.className)}
              {...buttonProps}
              onClick={() => push("/")}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};
export default Small;
