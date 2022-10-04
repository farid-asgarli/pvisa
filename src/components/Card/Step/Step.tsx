import Title from "antd/lib/typography/Title";
import { Card } from "../../../models/components/Card";
import { concatStyles } from "../../../utils/Concatinator";
import { RenderIcon } from "../../../utils/IconMapper";
import Paragraph from "../../Paragraph/Paragraph";
import styles from "./Step.module.css";
const Steps: typeof Card.Step = ({
  className,
  children,
  title,
  content,
  icon,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Head}>
        <div className={styles.IconWrapper}>
          {icon && (
            <RenderIcon
              weight="duotone"
              className={styles.Icon}
              iconName={icon}
            />
          )}
        </div>
      </div>
      <div className={styles.Content}>
        <Title level={4} className={styles.Title}>
          {title}
        </Title>
        <Paragraph className={styles.Paragraph}>{content}</Paragraph>
      </div>
    </div>
  );
};
export default Steps;
