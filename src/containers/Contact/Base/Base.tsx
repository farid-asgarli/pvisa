import { Divider } from "antd";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../data/data";
import { Heading } from "../../../models/components/Heading";
import { Contact } from "../../../models/containers/Contact";
import { SocialNetworks } from "../../../static/EntityTypes";
import { concatStyles } from "../../../utils/Concatinator";
import { RenderIcon } from "../../../utils/IconMapper";
import { t } from "../../../utils/Localization";
import styles from "./Base.module.css";
const Base: typeof Contact.Base = ({
  className,
  children,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Head}>
        <Wrapper>
          <Heading.Secondary size="lg" className={styles.Title}>
            {t("contact_header_title", templateVariables)}
          </Heading.Secondary>
          <span className={styles.Subtitle}>
            {t("contact_header_subtitle", templateVariables)}
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
              {SampleData.SocialNetworkLinks.map((x, i) => (
                <Link key={i} href={`https://${x.path}.com`}>
                  <a target={"_blank"}>
                    <RenderIcon
                      weight="fill"
                      iconName={
                        (SocialNetworks[x.type] + "Logo") as "YoutubeLogo"
                      }
                      className={styles.SocialIcon}
                    />
                  </a>
                </Link>
              ))}
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
          <Contact.ApplicationForm templateVariables={templateVariables} />
        </Wrapper>
      </div>
    </div>
  );
};
export default Base;
