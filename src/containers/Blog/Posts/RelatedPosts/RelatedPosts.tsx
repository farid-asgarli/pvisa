import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { SplideProps } from "@splidejs/react-splide/dist/types/types";
import { useRouter } from "next/router";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { StringExtensions } from "../../../../extensions/String";
import Locales from "../../../../localization/locales";
import { Card } from "../../../../models/components/Card";
import { Carousel } from "../../../../models/components/Carousel";
import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { commonSlideProps } from "../../../../static/CommonSlideProps";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./RelatedPosts.module.css";
const RelatedPosts: typeof Blog.Posts.RelatedPosts = ({
  className,
  children,
  items,
  ...props
}) => {
  const { locale } = useRouter();

  const slideProps: SplideProps = {
    ...commonSlideProps,
    options: {
      ...commonSlideProps.options,
      perPage: 4,
      gap: 30,
      breakpoints: {
        1200: {
          perPage: 3,
        },
        868: {
          perPage: 2,
        },
        768: {
          perPage: 1,
          arrows: false,
        },
      },
    },
  };

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Secondary size="lg">
          {Locales[locale as DefaultLocale].Blog_RelatedPosts}
        </Heading.Secondary>
        <div className={styles.Collection}>
          <Splide {...slideProps}>
            <SplideTrack>
              {items.map((x, i) => (
                <SplideSlide key={i}>
                  <Card.RelatedPost
                    {...x}
                    href={x.href ?? StringExtensions.Empty}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
            <Carousel.Buttons
              classes={{
                arrow: styles.Arrow,
                leftArrow: styles.ArrowLeft,
                rightArrow: styles.ArrowRight,
              }}
            />
          </Splide>
        </div>
      </Wrapper>
    </div>
  );
};
export default RelatedPosts;
