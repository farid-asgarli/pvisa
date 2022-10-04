import Title from "antd/lib/typography/Title";
import { Heading } from "../../../models/components/Heading";
import { concatStyles } from "../../../utils/Concatinator";
import { mapElementsToHighlight } from "../../../utils/HighlightMapper";
import styles from "./Banner.module.css";
const Banner: typeof Heading.Banner = ({
  className,
  children,
  additionalContent,
  elementsToHighlight,
  ...props
}) => {
  const shouldHighlightElements =
    elementsToHighlight && elementsToHighlight.length > 0;
  return (
    <div className={styles.Body}>
      <Title
        className={concatStyles(
          styles.Heading,
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
      {additionalContent}
    </div>
  );
};
export default Banner;
