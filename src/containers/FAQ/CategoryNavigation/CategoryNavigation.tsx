import Wrapper from "../../../components/Wrapper/Wrapper";
import { FAQ } from "../../../models/containers/FAQ";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./CategoryNavigation.module.css";
const CategoryNavigation: typeof FAQ.CategoryNavigation = ({
  className,
  children,
  items,
  setActiveCategoryId,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Collection}>
          {items.map((x, i) => (
            <FAQ.CategoryButton
              key={i}
              onClick={() => setActiveCategoryId(x.id!)}
            >
              {x.title}
            </FAQ.CategoryButton>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default CategoryNavigation;
