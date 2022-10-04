import { concatStyles } from "./Concatinator";

export function headingMapper(
  className: string,
  heading?: React.ReactNode,
  index: number = 2
): React.ReactNode {
  if (typeof heading === "string" && !!heading) {
    const words: string[] = heading.split(" ");
    let textToDisplay: React.ReactElement[] = [];
    if (words.length > 3) {
      words.forEach((x, i) =>
        textToDisplay.push(
          <span className={concatStyles(i === index && className)} key={i}>
            {x}
          </span>
        )
      );
      return textToDisplay;
    }
  }
  return heading;
}
