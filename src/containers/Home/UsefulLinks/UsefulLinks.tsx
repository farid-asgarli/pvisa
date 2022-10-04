import Title from "antd/lib/typography/Title";
import QuickLink from "../../../components/QuickLink/QuickLink";
import { Heading } from "../../../models/components/Heading";
import { Home } from "../../../models/containers/Home";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./UsefulLinks.module.css";
const UsefulLinks: typeof Home.UsefulLinks = ({
  className,
  children,
  items,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Primary className={styles.Heading}>
        Country Symbol
      </Heading.Primary>
      <div className={styles.LinkContentWrapper}>
        <div className={styles.LinkContent}>
          <Title className={styles.Title}>Usefull links:</Title>
          <div className={styles.Collection}>
            {items.map(({ name, url }, i) => (
              <QuickLink key={i} href={url}>
                {name}
              </QuickLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsefulLinks;
