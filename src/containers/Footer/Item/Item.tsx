import Title, { TitleProps } from "antd/lib/typography/Title";
import Link from "next/link";
import React from "react";
import Logo from "../../../components/Logo/Logo";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../data/data";
import Locales from "../../../localization/locales";
import { Footer } from "../../../models/containers/Footer";
import { menuItems } from "../../../static/MenuLinks";
import { concatStyles } from "../../../utils/Concatinator";
import { socialNetworkIconMapper } from "../../../utils/IconMapper";
import styles from "./Item.module.css";

const Item: typeof Footer.Item = ({
  children,
  className,
  commonPageProps: {
    routerProps: { locale },
  },
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
                {Locales[locale].Footer_Columns_About_Title}
              </ColumnHeader>
              <ul className={styles.ColumnContent}>
                {menuItems(locale).map((x, i) => (
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
                {Locales[locale].Footer_Columns_Legal_Title}
              </ColumnHeader>
              <ul className={styles.ColumnContent}>
                <Footer.Link>
                  {Locales[locale].Footer_Columns_Legal_TermsAndConditions}
                </Footer.Link>
                <Footer.Link>
                  {Locales[locale].Footer_Columns_Legal_PrivacyPolicy}
                </Footer.Link>
              </ul>
            </div>
            <div className={concatStyles(styles.Column, styles.ColumnSocial)}>
              <ColumnHeader>
                {Locales[locale].Footer_Columns_Social_Title}
              </ColumnHeader>
              <div className={styles.SocialContent}>
                {SampleData.SocialNetworkLinks.map((x, i) => {
                  let IconElement = socialNetworkIconMapper(x.type);
                  return (
                    <Link key={i} href={`https://${x.path}.com`}>
                      <a target={"_blank"}>
                        <IconElement
                          weight="duotone"
                          className={styles.SocialIcon}
                        />
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.BottomInner}>
        <Wrapper>
          <span className={styles.CopyrightText}>
            ©&nbsp;{new Date().getFullYear()}.{" "}
            {Locales[locale].Footer_Copyright}
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
