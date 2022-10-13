import React, { useState } from "react";
import { Router } from "next/router";
import Progress from "../../components/Progress/Progress";
import { Navbar } from "../../models/containers/Navbar";
import { Footer } from "../../models/containers/Footer";
import { Banner } from "../../models/components/Banner";
import { t } from "../../utils/Localization";
import { getCallToActionByKey } from "../../utils/CommonContent";

export const Layout: React.FC<{
  commonPageProps: CommonPageProps;
}> = ({ children, commonPageProps }) => {
  const [loading, setLoading] = useState<boolean>(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  const bottomCTA = getCallToActionByKey(
    "call_to_action_bottom",
    commonPageProps.callToActions
  );

  const canRenderBottomBanner =
    !commonPageProps.routerProps.pathname.startsWith("/apply/step-two") &&
    !commonPageProps.routerProps.pathname.startsWith("/apply/step-three");

  return (
    <>
      <Navbar.Desktop.Item commonPageProps={commonPageProps} />
      <Navbar.Mobile.Item commonPageProps={commonPageProps} />
      <Progress isAnimating={loading} />
      {children}
      {canRenderBottomBanner && (
        <Banner.Bottom
          buttonProps={{
            children: t("buttons_apply", commonPageProps.templateVariables),
          }}
          imageUrl={bottomCTA?.background}
          href={bottomCTA?.url}
        >
          {bottomCTA?.name}
        </Banner.Bottom>
      )}
      <Footer.Item commonPageProps={commonPageProps} />
    </>
  );
};
