import { useRouter } from "next/router";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Locales from "../../../localization/locales";
import { Heading } from "../../../models/components/Heading";
import { About } from "../../../models/containers/About";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Content.module.css";
const Content: typeof About.Content = ({ className, children, ...props }) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Secondary size="lg" className={styles.Title}>
          {Locales[locale as DefaultLocale].AboutUs_Title}
        </Heading.Secondary>
        <p className={styles.Description}>
          {Locales[locale as DefaultLocale].AboutUs_Content}
        </p>
      </Wrapper>
    </div>
  );
};
export default Content;
