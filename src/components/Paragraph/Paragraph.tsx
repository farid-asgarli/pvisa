import { concatStyles } from "../../utils/Concatinator";
import styles from "./Paragraph.module.css";
const Paragraph: DivElement<{
  ellipsis?: Indefinable<number>;
}> = ({ className, children, style, ellipsis, ...props }) => {
  /** Checks if the ellipsis property exists and the supplied value is more than '0'. */
  const isTextEllipsis = ellipsis !== undefined && ellipsis !== 0;

  return (
    <p
      className={concatStyles(
        styles.Body,
        className,
        isTextEllipsis && styles.Ellipsis
      )}
      style={{
        WebkitLineClamp: ellipsis,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
export default Paragraph;
