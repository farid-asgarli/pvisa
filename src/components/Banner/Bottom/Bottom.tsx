import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import React from "react";
import { Banner } from "../../../models/components/Banner";
import { Button } from "../../../models/components/Button";
import { concatStyles } from "../../../utils/Concatinator";
import Overlay from "../../Overlay/Overlay";
import Wrapper from "../../Wrapper/Wrapper";
import styles from "./Bottom.module.css";
const Bottom: typeof Banner.Bottom = ({
  children,
  className,
  imageUrl,
  buttonProps,
  style,
  href,
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
        <Title className={styles.Heading}>{children}</Title>
        {buttonProps && (
          <Button.Secondary
            className={concatStyles(styles.Button, buttonProps.className)}
            {...(href && {
              onClick: () => push(href),
            })}
            {...buttonProps}
          />
        )}
      </Wrapper>
    </div>
  );
};
export default Bottom;
