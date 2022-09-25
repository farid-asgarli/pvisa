import { StringExtensions } from "../extensions/String";

/**
 * Concatinates the provided set of styles.
 * @param args Combination of styles to concatinate.
 * @returns Joint styles.
 */
export const concatStyles = (...args: Indefinable<string | boolean>[]) =>
  args
    .filter((x) => x !== "undefined" && x !== undefined && x !== false)
    .join(StringExtensions.WhiteSpace);
