import { FC } from "react";
import { Page } from "../../../models/components/Page";
import { BackgroundColors } from "../../../static/PageColors";
import styles from "./Item.module.css";
const Item: typeof Page.Item = ({
  children,
  backgroundColor = BackgroundColors.White,
  ...props
}) => {
  return (
    <main
      style={{
        backgroundColor,
      }}
      className={styles.Body}
      {...props}
    >
      {children}
    </main>
  );
};
export default Item;
