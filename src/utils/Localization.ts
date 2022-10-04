import { StringExtensions } from "../extensions/String";

export function t(key: string, content: CommonContent.TemplateVariable[]) {
  return (
    content?.find((x) => x.unique_identifier === key)?.translation ??
    StringExtensions.Empty
  );
}
