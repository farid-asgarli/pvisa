import Router from "next/router";

export const pointerProps: React.ImgHTMLAttributes<HTMLImageElement> = {
  style: {
    cursor: "pointer",
  },
  onClick: () => Router.push("/"),
};
