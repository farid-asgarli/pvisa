/* eslint-disable @next/next/no-img-element */
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import React from "react";
import { Card } from "../../../models/components/Card";
import { SocialNetworks } from "../../../static/EntityTypes";
import { concatStyles } from "../../../utils/Concatinator";
import { RenderIcon } from "../../../utils/IconMapper";
import styles from "./Avatar.module.css";
const Avatar: typeof Card.Avatar = ({
  children,
  className,
  imageUrl,
  position,
  socialNetworkLinks,
  title,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.ImageWrapper}>
        <img src={imageUrl} alt={title} className={styles.Image} />
      </div>
      <div className={styles.Content}>
        <Title className={styles.Title} level={4}>
          {title}
        </Title>
        <div className={styles.Position}>{position}</div>
      </div>
      <div className={styles.SocialNetworks}>
        {socialNetworkLinks.map((x, i) => (
          <Link key={i} href={x.url ?? "/"}>
            <a>
              <RenderIcon
                weight="fill"
                iconName={(SocialNetworks[x.type] + "Logo") as "YoutubeLogo"}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Avatar;
