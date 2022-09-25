import { Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { WhatsappLogo } from "phosphor-react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../data/data";
import Locales from "../../../localization/locales";
import { Heading } from "../../../models/components/Heading";
import { Contact } from "../../../models/containers/Contact";
import { concatStyles } from "../../../utils/Concatinator";
import { socialNetworkIconMapper } from "../../../utils/IconMapper";
import styles from "./Base.module.css";
const Base: DivElement = ({ className, children, ...props }) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Head}>
        <Wrapper>
          <Heading.Secondary size="lg" className={styles.Title}>
            {Locales[locale as DefaultLocale].Contact_Header_Title}
          </Heading.Secondary>
          <span className={styles.Subtitle}>
            {Locales[locale as DefaultLocale].Contact_Header_Subtitle}
          </span>
        </Wrapper>
      </div>
      <div className={styles.Main}>
        <Wrapper>
          <div className={styles.Links}>
            {SampleData.ContactLinks.map((x, i) => (
              <Contact.Link key={i} {...x} />
            ))}
          </div>
          <Divider />
          <div className={styles.Social}>
            <Heading.Secondary>Social</Heading.Secondary>
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
          <Divider className={styles.BottomDivider} />
          <div className={styles.BaseContactOption}>
            <Heading.Secondary className={styles.Title}>
              WhatsApp number
            </Heading.Secondary>
            <div className={styles.Details}>
              <WhatsappLogo weight="fill" className={styles.Icon} />
              <span className={styles.Text}>+994 55 300 01 35</span>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.ApplicationForm}>
        <Wrapper>
          <Contact.ApplicationForm />
        </Wrapper>
      </div>
    </div>
  );
};
export default Base;
