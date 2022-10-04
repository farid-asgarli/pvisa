import Wrapper from "../../../components/Wrapper/Wrapper";
import { Heading } from "../../../models/components/Heading";
import { About } from "../../../models/containers/About";
import { getStaticContentByKey } from "../../../utils/CommonContent";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Content.module.css";

const Content: typeof About.Content = ({
  className,
  children,
  templateVariables,
  staticContents,
  ...props
}) => {
  const aboutContent = getStaticContentByKey(
    "about_us_content",
    staticContents
  );

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Secondary size="lg" className={styles.Title}>
          {aboutContent?.title}
        </Heading.Secondary>
        <p className={styles.Description}>{aboutContent?.body}</p>
      </Wrapper>
    </div>
  );
};
export default Content;
