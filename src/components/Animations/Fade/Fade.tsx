import { useEffect, useState } from "react";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Fade.module.css";
const Fade: DivElement<{
  visible: boolean;
  /**
   * Duration in milliseconds;
   */
  duration?: number;
}> = ({ className, children, visible, duration = 1000, ...props }) => {
  const [callTimeout, setCallTimeout] = useState<NodeJS.Timeout>();
  const [shouldShow, setShouldShow] = useState<boolean>(visible);

  const handleAnimation = (visible: boolean) => {
    if (callTimeout !== undefined) {
      clearTimeout(callTimeout);
      setCallTimeout(undefined);
    }
    setCallTimeout(
      setTimeout(
        () => setShouldShow(visible),
        !visible ? duration - duration / 10 : 0
      )
    );
  };

  useEffect(() => {
    handleAnimation(visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <div
      className={concatStyles(
        styles.Body,
        className,
        visible ? styles.FadeIn : styles.FadeOut
      )}
      style={{
        animationDuration: `${duration}ms`,
      }}
      {...props}
    >
      {shouldShow && children}
    </div>
  );
};
export default Fade;
