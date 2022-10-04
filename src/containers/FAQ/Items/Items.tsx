import { Collapse } from "../../../models/components/Collapse";
import { FAQ } from "../../../models/containers/FAQ";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Items.module.css";
const Items: typeof FAQ.Items = ({ className, children, items, ...props }) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Collapse.Default.Wrapper accordion>
        {items?.map(({ title, content, id }) => (
          <Collapse.Default.Item
            className={styles.CollapseItem}
            key={id}
            header={title}
          >
            {content}
          </Collapse.Default.Item>
        ))}
      </Collapse.Default.Wrapper>
    </div>
  );
};
export default Items;
