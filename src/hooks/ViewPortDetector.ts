import React from "react";

export default function useViewPortDetector(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}
