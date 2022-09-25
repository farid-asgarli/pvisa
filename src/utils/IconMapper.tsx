import Link from "next/link";
import * as PhosphorIcons from "phosphor-react";
import { SocialNetworks } from "../static/EntityTypes";
import { QuickShareLink } from "../static/QuickShareIcons";

export const socialNetworkIconMapper = (value: SocialNetworks): IconType =>
  (PhosphorIcons as unknown as KeyValuePair<IconType>)[
    SocialNetworks[value] + "Logo"
  ] as IconType;

export const quickShareLinksMapper = (
  { icon, socialNetworkType, url }: QuickShareLink,
  i: number,
  iconProps?: Indefinable<IconProps>
) => {
  let Icon: Indefinable<IconType> = undefined;
  if (socialNetworkType !== undefined)
    Icon = socialNetworkIconMapper(socialNetworkType);
  else if (icon) Icon = icon;
  return (
    <Link key={i} href={url ?? "/"}>
      <a>{Icon && <Icon weight="duotone" {...iconProps} />}</a>
    </Link>
  );
};
