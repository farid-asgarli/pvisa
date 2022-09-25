import * as React from "react";

const Container = ({
  children,
  isFinished,
  animationDuration,
}: {
  children: React.ReactNode;
  isFinished: boolean;
  animationDuration: number;
}) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;
