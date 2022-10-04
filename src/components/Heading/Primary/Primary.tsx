import Title from "antd/lib/typography/Title";
import React from "react";
import { Heading } from "../../../models/components/Heading";
import { concatStyles } from "../../../utils/Concatinator";
import { mapElementsToHighlight } from "../../../utils/HighlightMapper";
import styles from "./Primary.module.css";
const Primary: typeof Heading.Primary = ({
  children,
  elementsToHighlight,
  className,
  ...props
}) => {
  const shouldHighlightElements =
    elementsToHighlight && elementsToHighlight.length > 0;

  return (
    <Title
      className={concatStyles(
        styles.Body,
        className,
        shouldHighlightElements && styles.Highlighted
      )}
      {...props}
    >
      {mapElementsToHighlight(
        children,
        elementsToHighlight,
        styles.WordToHighlight
      )}
    </Title>
  );
};
export default Primary;
