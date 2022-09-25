import { ButtonHTMLAttributes } from "react";
import { capitalize } from "../../utils/Capitalize";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Badge.module.css";
const Badge: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    orderNumber: number;
    status: OrdersType.ApplicationStatuses;
  }
> = ({ className, children, status, orderNumber, ...props }) => {
  return (
    <button className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Left}>
        Applicant #{orderNumber}
        <br />({children})
      </div>
      <div className={concatStyles(styles.Right, colorPaletteAssigner(status))}>
        {capitalize(status)}
      </div>
    </button>
  );
};

const colorPaletteAssigner = (status: OrdersType.ApplicationStatuses) =>
  styles[capitalize(status)];

export default Badge;
