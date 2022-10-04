import { useState } from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Heading } from "../../../models/components/Heading";
import { Contact } from "../../../models/containers/Contact";
import { FAQ } from "../../../models/containers/FAQ";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Base.module.css";
const Base: typeof FAQ.Base = ({
  className,
  children,
  items,
  templateVariables,
  ...props
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    items[0]?.unique_identifier
  );

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Secondary className={styles.Heading} size="lg">
          Frequently Asked Questions
        </Heading.Secondary>
        <div className={styles.MainContent}>
          <FAQ.CategoryNavigation
            setActiveCategoryId={setActiveCategory}
            activeCategoryId={activeCategory}
            items={items.map((x) => ({
              id: x.unique_identifier,
              title: x.name,
            }))}
          />
        </div>
        <FAQ.Items
          items={items
            ?.find((x) => x.unique_identifier === activeCategory)
            ?.faq_questions.map((x) => ({
              id: x.unique_identifier,
              content: x.body,
              title: x.title,
            }))}
        />
        <Contact.ApplicationForm
          templateVariables={templateVariables}
          className={styles.ApplicationForm}
        />
      </Wrapper>
    </div>
  );
};
export default Base;
