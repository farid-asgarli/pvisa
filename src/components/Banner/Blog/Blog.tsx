import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Title from "antd/lib/typography/Title";
import { Banner } from "../../../models/components/Banner";
import { Card } from "../../../models/components/Card";
import { Carousel } from "../../../models/components/Carousel";
import { commonSlideProps } from "../../../static/CommonSlideProps";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import Wrapper from "../../Wrapper/Wrapper";
import styles from "./Blog.module.css";
const Blog: typeof Banner.Blog = ({
  className,
  children,
  items,
  style,
  locale,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)}>
      <div className={styles.Collection}>
        <Splide {...commonSlideProps}>
          <SplideTrack>
            {items.map(({ imageUrl, url, ...rest }, i) => (
              <SplideSlide key={i}>
                <div
                  className={styles.CarouselItem}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    ...style,
                  }}
                  {...props}
                >
                  <Wrapper>
                    <div className={styles.ItemContent}>
                      <Title className={styles.Title} level={3}>
                        {t("blog_popular_blogs", templateVariables)}
                      </Title>
                      <div className={styles.Overlay} />
                      <Card.Blog
                        {...rest}
                        className={styles.Card}
                        href={url ?? ""}
                        buttonProps={{
                          children: t("buttons_read_blog", templateVariables),
                        }}
                      />
                    </div>
                  </Wrapper>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Wrapper>
            <Carousel.Buttons
              classes={{
                arrow: styles.Arrow,
                arrows: styles.Arrows,
              }}
            />
          </Wrapper>
        </Splide>
      </div>
    </div>
  );
};
export default Blog;
