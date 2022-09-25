declare namespace VisaType {
  type Base = {
    id: number;
    title: string;
    slug: string;
    visa_status: "evisa" | null;
    additional_notes: string;
    sub_types: SubType[];
  };

  type SubType = {
    additional_notes: string;
    disabled: boolean;
    documents: Document[];
    evisa_id: number;
    fees: Fee[];
    id: number;
    processing: string;
    title: string;
    validity: string;
  };

  type Fee = {
    title: string;
    description: string;
    value: number;
    currency: string;
    is_online: boolean;
  };

  type Document = {
    title: string;
    provided_by: string;
  };
}
