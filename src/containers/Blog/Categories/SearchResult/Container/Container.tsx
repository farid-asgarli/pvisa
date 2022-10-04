import { FunnelSimple } from "phosphor-react";
import Spinner from "../../../../../components/Spinner/Spinner";
import { Blog } from "../../../../../models/containers/Blog";
import { concatStyles } from "../../../../../utils/Concatinator";
import styles from "./Container.module.css";
const Container: typeof Blog.Categories.SearchResult.Container = ({
  className,
  children,
  items,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      {items ? (
        items.length > 0 ? (
          <div className={styles.Collection}>
            {items.map((x, i) => (
              <Blog.Categories.SearchResult.Item
                className={styles.ResultItem}
                key={i}
                {...x}
              />
            ))}
          </div>
        ) : (
          <div className={styles.Empty}>
            <FunnelSimple className={styles.Icon} />
            <span className={styles.Text}>No result was found</span>
          </div>
        )
      ) : (
        <div className={styles.Loader}>
          <Spinner /> <span className={styles.Text}>Fetching results...</span>
        </div>
      )}
    </div>
  );
};
export default Container;
