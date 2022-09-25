import { useRouter } from "next/router";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Locales from "../../../localization/locales";
import { Card } from "../../../models/components/Card";
import { Heading } from "../../../models/components/Heading";
import { Home } from "../../../models/containers/Home";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Steps.module.css";
const Steps: typeof Home.Steps = ({ className, items, children, ...props }) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Primary
          className={styles.Heading}
          elementsToHighlight={[2, 3, 4, 5]}
        >
          {Locales[locale as DefaultLocale].Steps_Title}
        </Heading.Primary>
        <div className={styles.CardsList}>
          {items.map((item, i) => (
            <Card.Step key={i} {...item} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default Steps;
