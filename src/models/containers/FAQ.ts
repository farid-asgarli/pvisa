import Base from "../../containers/FAQ/Base/Base";
import CategoryButton from "../../containers/FAQ/CategoryButton/CategoryButton";
import CategoryNavigation from "../../containers/FAQ/CategoryNavigation/CategoryNavigation";
import Items from "../../containers/FAQ/Items/Items";

type FAQCategory = {
  id?: string;
  title?: string;
};

type FAQItem = {
  id: string;
  title?: string;
  content?: string;
};

type FAQComponent = {
  Base: DivElement<{
    items: CommonContent.FAQContent[];
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  CategoryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  CategoryNavigation: DivElement<{
    items: FAQCategory[];
    activeCategoryId: string;
    setActiveCategoryId: React.Dispatch<React.SetStateAction<string>>;
  }>;
  Items: DivElement<{ items?: Indefinable<FAQItem[]> }>;
};

export const FAQ: FAQComponent = {
  Base,
  CategoryButton,
  CategoryNavigation,
  Items,
};
