import { Collapse as AntCollapse } from "antd";
import { Collapse } from "../../../../models/components/Collapse";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Wrapper.module.css";
const Wrapper: typeof Collapse.Default.Wrapper = ({ className, ...props }) => {
  return (
    <AntCollapse
      expandIconPosition="right"
      className={concatStyles(styles.Body, className, "collapse-default")}
      {...props}
    />
  );
};
export default Wrapper;
