import React, { useState } from "react";
import { Router } from "next/router";
import Progress from "../../components/Progress/Progress";
import { Navbar } from "../../models/containers/Navbar";
import { Footer } from "../../models/containers/Footer";
import { Banner } from "../../models/components/Banner";
import Locales from "../../localization/locales";

export const Layout: React.FC<{
  commonPageProps: CommonPageProps;
}> = ({ children, commonPageProps }) => {
  const [loading, setLoading] = useState<boolean>(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      <Navbar.Desktop.Item commonPageProps={commonPageProps} />
      <Navbar.Mobile.Item commonPageProps={commonPageProps} />
      <Progress isAnimating={loading} />
      {children}
      <Banner.Bottom
        buttonProps={{
          children: Locales[commonPageProps.routerProps.locale].Buttons_Apply,
        }}
        imageUrl="/assets/images/banner/1.png"
      >
        {Locales[commonPageProps.routerProps.locale].Banners_Promotion_Text}
      </Banner.Bottom>
      <Footer.Item commonPageProps={commonPageProps} />
    </>
  );
};
