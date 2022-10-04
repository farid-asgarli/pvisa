import { Collapse } from "../../../../models/components/Collapse";
import { Collapse as AntCollapse } from "antd";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Item.module.css";
const Item: typeof Collapse.Default.Item = ({ className, ...props }) => {
  return (
    <AntCollapse.Panel
      className={concatStyles(styles.Body, className)}
      {...props}
    />
  );
};
export default Item;
