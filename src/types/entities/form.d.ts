declare namespace FormsType {
  type FieldSet = {
    [name: string]: Field[];
  };

  type Option = { key: string; value: string };

  type Field = {
    key: string;
    title: string;
    field_type:
      | "text"
      | "date"
      | "tel"
      | "email"
      | "file"
      | "choice"
      | "text-area"
      | "country";
    filled_value: Nullable<string>;
    description: string;
    width: number;
    line: number;
    required: boolean;
    is_required: boolean;
    options: Nullable<Option[]>;
    show_if: unknown | null;
  };

  type DetailsResponse = {
    data: Nullable<FieldSet>;
    relations: object;
  };

  type StepTwoResponse = {
    message: string;
    data: {
      payment_url: string;
      invoice_group_id: string;
      order_id: number;
    };
  };

  type StepThreeResponse = {
    is_filled: boolean;
    data: Field[];
  };

  type StepThreeRequest = {
    is_filled: boolean;
    submit: boolean;
    form_type: "evisa" | string;
    submitted_form_id: string;
    fields: {
      [key: `field-${number}`]: string;
    };
  };
}
