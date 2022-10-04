declare namespace CommonContent {
  type ContentObjectEntry =
    | "application_steps"
    | "call_to_actions"
    | "static_contents"
    | "template_variables"
    | "faq_categories"
    | "usefull_links";

  type CallToAction = {
    unique_identifier: string;
    name: string;
    url: string;
    background: string;
  };

  type ApplicationStep = {
    unique_identifier: string;
    title: string;
    icon: string;
    body: string;
  };

  type StaticContent = {
    unique_identifier: string;
    title: string;
    body: string;
  };

  type FAQContent = {
    unique_identifier: string;
    name: string;
    faq_questions: {
      unique_identifier: string;
      title: string;
      body: string;
    }[];
  };

  type UsefulLink = {
    unique_identifier: string;
    name: string;
    url: string;
  };

  type TemplateVariable = { unique_identifier: string; translation: string };

  type CommonContentResponse<K extends ContentObjectEntry> = {
    [Z in K]: K extends "application_steps"
      ? ApplicationStep[]
      : K extends "call_to_actions"
      ? CallToAction[]
      : K extends "static_contents"
      ? StaticContent[]
      : K extends "faq_categories"
      ? FAQContent[]
      : K extends "usefull_links"
      ? UsefulLink[]
      : TemplateVariable[];
  } & {
    id: number;
    name: string;
    short_code: string;
    is_active: boolean;
    is_main: boolean;
  };
}
