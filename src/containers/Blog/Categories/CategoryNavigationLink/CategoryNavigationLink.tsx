import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./CategoryNavigationLink.module.css";
const CategoryNavigationLink: typeof Blog.Categories.CategoryNavigationLink = ({
  className,
  isActive,
  children,
  ...props
}) => {
  return (
    <a
      className={concatStyles(
        styles.Body,
        className,
        isActive && styles.Active
      )}
      {...props}
    >
      {children}
    </a>
  );
};
export default CategoryNavigationLink;
