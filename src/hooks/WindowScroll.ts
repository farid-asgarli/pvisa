import { useEffect, useState, useCallback } from "react";

function useWindowScroll(offset: number = 200) {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY > offset ? setSticky(true) : setSticky(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => handleScroll());
      return () => {
        window.removeEventListener("scroll", () => handleScroll());
      };
    }
  }, [handleScroll]);

  return isSticky;
}

export default useWindowScroll;
