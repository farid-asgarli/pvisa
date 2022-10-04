import Title, { TitleProps } from "antd/lib/typography/Title";
import Link from "next/link";
import React from "react";
import Logo from "../../../components/Logo/Logo";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../data/data";
import { Footer } from "../../../models/containers/Footer";
import { SocialNetworks } from "../../../static/EntityTypes";
import { menuItems } from "../../../static/MenuLinks";
import { concatStyles } from "../../../utils/Concatinator";
import { RenderIcon } from "../../../utils/IconMapper";
import { t } from "../../../utils/Localization";
import styles from "./Item.module.css";

const Item: typeof Footer.Item = ({
  children,
  className,
  commonPageProps: { templateVariables },
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.UpperInner}>
        <Wrapper>
          <div className={styles.Columns}>
            <div
              className={concatStyles(styles.Column, styles.ColumnDescription)}
            >
              <Logo />
            </div>
            <div
              className={concatStyles(styles.Column, styles.ColumnMenuLinks)}
            >
              <ColumnHeader>
                {t("footer_columns_about_title", templateVariables)}
              </ColumnHeader>
              <ul className={styles.ColumnContent}>
                {menuItems(templateVariables).map((x, i) => (
                  <Footer.Link key={i} path={x.path}>
                    {x.text}
                  </Footer.Link>
                ))}
              </ul>
            </div>
            <div
              className={concatStyles(
                styles.Column,
                styles.ColumnMiscellaneous
              )}
            >
              <ColumnHeader>
                {t("footer_columns_legal_title", templateVariables)}
              </ColumnHeader>
              <ul className={styles.ColumnContent}>
                <Footer.Link>
                  {t(
                    "footer_columns_legal_termsandconditions",
                    templateVariables
                  )}
                </Footer.Link>
                <Footer.Link>
                  {t("footer_columns_legal_privacypolicy", templateVariables)}
                </Footer.Link>
              </ul>
            </div>
            <div className={concatStyles(styles.Column, styles.ColumnSocial)}>
              <ColumnHeader>
                {t("footer_columns_social_title", templateVariables)}
              </ColumnHeader>
              <div className={styles.SocialContent}>
                {SampleData.SocialNetworkLinks.map((x, i) => (
                  <Link key={i} href={`https://${x.path}.com`}>
                    <a target={"_blank"}>
                      <RenderIcon
                        className={styles.SocialIcon}
                        weight="fill"
                        iconName={
                          (SocialNetworks[x.type] + "Logo") as "YoutubeLogo"
                        }
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.BottomInner}>
        <Wrapper>
          <span className={styles.CopyrightText}>
            ©&nbsp;{new Date().getFullYear()}.{" "}
            {t("footer_copyright", templateVariables)}
          </span>
        </Wrapper>
      </div>
    </div>
  );
};

const ColumnHeader: React.FC<TitleProps> = ({ children, ...props }) => (
  <Title level={4} className={styles.ColumnTitle} {...props}>
    {children}
  </Title>
);

export default Item;
