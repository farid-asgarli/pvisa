import { withNProgress } from "@tanem/react-nprogress";
import React from "react";
import Bar from "./Bar/Bar";
import Container from "./Container";
import Spinner from "./Spinner/Spinner";

const Progress = ({
  isFinished,
  progress,
  animationDuration,
}: {
  animationDuration: number;
  isFinished: boolean;
  progress: number;
}) => (
  <Container isFinished={isFinished} animationDuration={animationDuration}>
    <Bar progress={progress} animationDuration={animationDuration} />
    <Spinner />
  </Container>
);

export default withNProgress(Progress);
