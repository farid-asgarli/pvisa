import { Navbar } from "../../../../models/containers/Navbar";
import styles from "./Link.module.css";
import RouterLink from "next/link";
import { concatStyles } from "../../../../utils/Concatinator";

const Link: typeof Navbar.Desktop.Link = ({
  className,
  children,
  active,
  path,
  activeClassName,
  ...props
}) => {
  return (
    <RouterLink href={path ?? "/"}>
      <a
        className={concatStyles(
          styles.Body,
          className,
          active === true && (activeClassName ?? styles.Active)
        )}
        {...props}
      >
        {children}
      </a>
    </RouterLink>
  );
};
export default Link;
