export const mapDate = (
  value: Indefinable<Date | string>,
  locale: Indefinable<string> = "az"
): string => {
  if (typeof value === "string") return value;
  else if (value)
    return new Date(value).toLocaleDateString(locale, {
      dateStyle: "long",
    });
  return "N/A";
};
