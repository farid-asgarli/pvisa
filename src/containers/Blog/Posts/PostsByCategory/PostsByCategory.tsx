import Title from "antd/lib/typography/Title";
import { Card } from "../../../../models/components/Card";
import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./PostsByCategory.module.css";
const CategoryPosts: typeof Blog.Posts.PostsByCategory = ({
  className,
  children,
  posts,
  categoryTitle,
  categoryUrl,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Blog.Posts.GroupedPosts
        categoryUrl={categoryUrl}
        categoryTitle={categoryTitle}
        posts={posts}
      />
    </div>
  );
};
export default CategoryPosts;
