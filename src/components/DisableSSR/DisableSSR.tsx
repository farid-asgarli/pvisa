import dynamic from "next/dynamic";
import React from "react";

const DisableSSR = (children: React.ReactNode) => (
  <React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(DisableSSR), {
  ssr: false,
});
