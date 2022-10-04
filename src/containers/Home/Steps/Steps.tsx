import { Heading } from "../../../models/components/Heading";
import { concatStyles } from "../../../utils/Concatinator";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Card } from "../../../models/components/Card";
import { Home } from "../../../models/containers/Home";
import { t } from "../../../utils/Localization";
import styles from "./Steps.module.css";

const Steps: typeof Home.Steps = ({
  className,
  items,
  children,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Primary
          className={styles.Heading}
          elementsToHighlight={[2, 3, 4, 5]}
        >
          {t("steps_title", templateVariables)}
        </Heading.Primary>
        <div className={styles.CardsList}>
          {items.map(({ body, icon, title, unique_identifier }, i) => (
            <Card.Step
              key={i}
              content={body}
              icon={icon as any}
              title={title}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default Steps;
