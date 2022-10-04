import { concatStyles } from "./Concatinator";

export const mapElementsToHighlight = (
  children: React.ReactNode,
  elementsToHighlight?: Indefinable<number[]>,
  className?: Indefinable<string>,
  wordSeperator: string = " "
) => {
  if (elementsToHighlight && typeof children === "string") {
    const wordsCollection = children.split(wordSeperator);
    const elementsToDisplay: React.ReactElement[] = [];

    wordsCollection.forEach((w, i) => {
      elementsToDisplay.push(
        <span
          key={i}
          className={concatStyles(
            elementsToHighlight.some((x) => x === i) && className
          )}
        >
          {w}
        </span>
      );
    });
    return elementsToDisplay;
  }
  return children;
};
