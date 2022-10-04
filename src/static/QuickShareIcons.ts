import { Link as LinkIcon } from "phosphor-react";
import { SocialNetworks } from "./EntityTypes";

export type QuickShareLink = {
  socialNetworkType?: Indefinable<SocialNetworks>;
  url?: Indefinable<string>;
  icon?: Indefinable<IconType>;
};

export const quickShareLinks: QuickShareLink[] = [
  {
    socialNetworkType: SocialNetworks.Facebook,
  },
  {
    socialNetworkType: SocialNetworks.Twitter,
  },
  {
    socialNetworkType: SocialNetworks.Instagram,
  },
  {
    icon: LinkIcon,
  },
];
