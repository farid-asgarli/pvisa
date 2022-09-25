import { Divider } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { HTMLAttributes, FC } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Locales from "../../localization/locales";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Error.module.css";
import { HardDrives, Question } from "phosphor-react";
import { HttpErrorTypes } from "../../static/EntityTypes";

const Error: FC<
  HTMLAttributes<HTMLDivElement> & {
    type?: HttpErrorTypes;
    routerProps: RouterProps;
  }
> = ({
  className,
  children,
  type = HttpErrorTypes.NotFound,
  routerProps: { locale },
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
                ? Locales[locale].Error_NotFound_Title
                : Locales[locale].Error_ServerError_Title}
            </Title>
            <Paragraph className={styles.Content}>
              {type === HttpErrorTypes.NotFound
                ? Locales[locale].Error_NotFound_Content
                : Locales[locale].Error_ServerError_Content}
            </Paragraph>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Error;
