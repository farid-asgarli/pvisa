import { concatStyles } from "../../utils/Concatinator";
import styles from "./Spinner.module.css";
const Spinner: DivElement = ({ className, children, ...props }) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Spinner}>
        <svg className={styles.SpinnerIcon} viewBox="0 0 24 24">
          <path
            d="M 22.49772,12.000001 A 10.49772,10.497721 0 0 1 12,22.497722 10.49772,10.497721 0 0 1 1.5022797,12.000001 10.49772,10.497721 0 0 1 12,1.5022797 10.49772,10.497721 0 0 1 22.49772,12.000001 Z"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default Spinner;
