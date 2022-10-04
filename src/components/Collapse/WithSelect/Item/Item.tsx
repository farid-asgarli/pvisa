import { Collapse } from "../../../../models/components/Collapse";
import { Collapse as AntCollapse, Radio } from "antd";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Item.module.css";
const Item: typeof Collapse.WithSelect.Item = ({
  className,
  checked,
  ...props
}) => {
  return (
    <AntCollapse.Panel
      className={concatStyles(styles.Body, className)}
      {...props}
      header={<Radio checked={checked}>{props.header}</Radio>}
    />
  );
};
export default Item;
