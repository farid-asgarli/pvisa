import { Divider } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { HTMLAttributes, FC } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Error.module.css";
import { HardDrives, Question } from "phosphor-react";
import { HttpErrorTypes } from "../../static/EntityTypes";
import { t } from "../../utils/Localization";

const Error: FC<
  HTMLAttributes<HTMLDivElement> & {
    type?: HttpErrorTypes;
    routerProps: RouterProps;
    templateVariables: CommonContent.TemplateVariable[];
  }
> = ({
  className,
  children,
  type = HttpErrorTypes.NotFound,
  routerProps: { locale },
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Box}>
          <div className={styles.IconWrapper}>
            {type === HttpErrorTypes.InternalServerError ? (
              <HardDrives className={styles.Icon} />
            ) : (
              <Question className={styles.Icon} />
            )}
          </div>
          <div className={styles.TextWrapper}>
            <Title className={styles.Title}>
              {type} <Divider type="vertical" />
              {type === HttpErrorTypes.NotFound
                ? t("error_notfound_title", templateVariables)
                : t("error_servererror_title", templateVariables)}
            </Title>
            <Paragraph className={styles.Content}>
              {type === HttpErrorTypes.NotFound
                ? t("error_notfound_content", templateVariables)
                : t("error_servererror_content", templateVariables)}
            </Paragraph>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Error;
