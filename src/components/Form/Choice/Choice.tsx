import { Switch } from "antd";
import { Info as InfoIcon } from "phosphor-react";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Choice.module.css";
const Choice: typeof Form.Choice = ({
  className,
  children,
  description,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)}>
      <InfoIcon size={32} weight="light" className={styles.Icon} />
      <span className={styles.Description}>{description}</span>
      <Switch {...props} className={styles.Switch} size="default" />
    </div>
  );
};
export default Choice;
