import Link from "next/link";
import * as PhosphorIcons from "phosphor-react";
import React from "react";
import { SocialNetworks } from "../static/EntityTypes";
import { QuickShareLink } from "../static/QuickShareIcons";

export type PhosphorIconsCollection = keyof Omit<
  typeof PhosphorIcons,
  "IconContext"
>;

const retrieveIcon = (iconName: PhosphorIconsCollection) => {
  try {
    const ComponentToRender: IconType =
      require(`phosphor-react/dist/icons/${iconName}.esm.js`).default;
    return ComponentToRender;
  } catch (error) {
    return React.Fragment;
  }
};

const quickShareLinksMapper = (
  { icon, socialNetworkType, url }: QuickShareLink,
  i: number,
  iconProps?: Indefinable<PhosphorIconProps>
) => {
  let Icon: Indefinable<IconType>;
  if (socialNetworkType !== undefined)
    Icon = retrieveIcon(
      (SocialNetworks[socialNetworkType] + "Logo") as PhosphorIconsCollection
    );
  else if (icon) Icon = icon;
  return (
    <Link key={i} href={url ?? "/"}>
      <a>{Icon && <Icon weight="fill" {...iconProps} />}</a>
    </Link>
  );
};

function RenderIcon({
  iconName,
  ...props
}: PhosphorIconProps<{ iconName: PhosphorIconsCollection }>) {
  const IconToRender = retrieveIcon(iconName);
  return <IconToRender {...props} />;
}

export { quickShareLinksMapper, RenderIcon };
