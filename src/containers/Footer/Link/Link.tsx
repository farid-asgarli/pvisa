import RouterLink from "next/link";
import { Footer } from "../../../models/containers/Footer";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Link.module.css";
const Link: typeof Footer.Link = ({ className, children, path, ...props }) => {
  return (
    <li className={concatStyles(styles.Body, className)} {...props}>
      {path ? (
        <RouterLink href={path}>
          <a>{children}</a>
        </RouterLink>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>{children}</a>
      )}
    </li>
  );
};
export default Link;
