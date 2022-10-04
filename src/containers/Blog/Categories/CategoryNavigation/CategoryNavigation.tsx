import { useRouter } from "next/router";
import { MagnifyingGlass, X } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import agent from "../../../../api/agent";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { UriGenerator } from "../../../../static/UriGenerator";
import { concatStyles } from "../../../../utils/Concatinator";
import { t } from "../../../../utils/Localization";
import styles from "./CategoryNavigation.module.css";
const CategoryNavigation: typeof Blog.Categories.CategoryNavigation = ({
  className,
  items,
  children,
  templateVariables,
  ...props
}) => {
  const [callTimeout, setCallTimeout] = useState<NodeJS.Timeout>();
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<BlogsType.Post[]>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleActivateTrigger = () => {
    setSearchTriggered(true);
    setTimeout(() => inputRef.current?.focus(), 500);
  };

  const { locale } = useRouter();

  const handleApiCall = (value: string, lenghtToTrigger: number = 3) => {
    if (inputValue.length >= lenghtToTrigger) {
      setResults(undefined);
      if (callTimeout !== undefined) {
        clearTimeout(callTimeout);
        setCallTimeout(undefined);
      }
      setCallTimeout(
        setTimeout(() => {
          agent.Blogs.Posts({
            lang: locale,
            searchString: value,
          }).then((res) => setResults(res.data));
        }, 1000)
      );
    }
  };

  useEffect(() => {
    handleApiCall(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Container}>
          <Heading.Secondary className={styles.Heading} size="sm">
            <span>{t("blog_categories", templateVariables)}</span>
            {!searchTriggered && (
              <button
                onClick={handleActivateTrigger}
                title="Search"
                className={styles.Button}
              >
                <MagnifyingGlass weight="bold" className={styles.Icon} />
              </button>
            )}
          </Heading.Secondary>
          {searchTriggered ? (
            <div className={styles.Search}>
              <div className={styles.SearchBar}>
                <MagnifyingGlass weight="bold" className={styles.Icon} />
                <input
                  ref={inputRef}
                  className={styles.Input}
                  placeholder={t("buttons_find_blog", templateVariables)}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  onClick={() => setSearchTriggered(false)}
                  title="Close search"
                  className={concatStyles(styles.Button, styles.CloseIcon)}
                >
                  <X weight="bold" className={styles.Icon} />
                </button>
              </div>
              {inputValue.length >= 3 && (
                <Blog.Categories.SearchResult.Container
                  className={styles.SearchResult}
                  items={results?.map((x) => ({
                    href: UriGenerator.Blog.Details(x.slug),
                    label: x.title,
                  }))}
                />
              )}
            </div>
          ) : (
            <div className={styles.Collection}>
              {items.map(({ title, href, isActive }, i) => (
                <Blog.Categories.CategoryNavigationLink
                  className={styles.Link}
                  isActive={isActive}
                  key={i}
                  href={href}
                >
                  {title}
                </Blog.Categories.CategoryNavigationLink>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};
export default CategoryNavigation;
