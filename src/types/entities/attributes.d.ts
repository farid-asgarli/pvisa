declare namespace AttributesType {
  type Fee = {
    id: number;
    fee: number;
    title: string;
    title_az: string;
    title_ru: string;
    description: Nullable<string>;
    value: number;
    currency: string;
    is_online: boolean;
  };

  type Document = {
    title: string;
    provided_by: string;
  };

  type AdditionalNotes = {
    additional_notes: string;
    additional_notes_ru: string;
    additional_notes_az: string;
  };

  type VisaType = {
    id: number;
    title: string;
    title_ru: string;
    title_az: string;
    slug: string;
    country: Nullable<string>;
    citizen_of: Nullable<string>;
    parent: Nullable<string>;
    duration: "short" | string;
  };

  type AttributeResponse = AdditionalNotes & {
    title: string;
    visa_sub_type: Nullable<string>;
    visa_sub_type_ru: Nullable<string>;
    visa_sub_type_az: Nullable<string>;
    combination: number;
    processing_value: string;
    processing_key: string;
    evisa_id: number;
    af_id: Nullable<number>;
    ovf_id: null;
    validity: number;
    combination_additional_notes: AdditionalNotes;
    documents: Document[];
    fee_attrs: Fee[];
    visa_type: VisaType;
    service_id: Nullable<number>;
  };

  type AttributesDetailsResponse = {
    combination_attrs: {
      title: string;
      combination: number;
      evisa_id: number;
    }[];
  };
}
