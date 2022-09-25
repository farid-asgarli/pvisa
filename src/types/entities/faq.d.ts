declare namespace FAQType {
  type AllResponse = {
    id: number;
    name: string;
    short_code: "en" | "tr";
    is_active: boolean;
    is_main: boolean;
    faq_categories: [
      {
        unique_identifier: string;
        name: string;
        faq_questions: [
          {
            unique_identifier: string;
            title: string;
            body: string;
          }
        ];
      }
    ];
  };
}
