/* eslint-disable @next/next/no-img-element */
import { Star } from "phosphor-react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { About } from "../../../models/containers/About";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Honours.module.css";
const Honours: typeof About.Honours = ({
  className,
  children,
  items,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Rating}>
          <div className={styles.Stars}>
            {[...new Array(5)].map((x, i) => (
              <Star weight="fill" className={styles.StarIcon} key={i} />
            ))}
          </div>
          <div className={styles.Text}>
            1000 reviews · Trusted by 400,000+ travelers
          </div>
        </div>
        <div className={styles.Certificates}>
          {items.map((x, i) => (
            <img
              key={i}
              alt=""
              className={concatStyles(x.wide === true && styles.WideImage)}
              src={x.imageUrl}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default Honours;
