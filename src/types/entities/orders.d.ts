declare namespace OrdersType {
  type Applicant = {
    id: number;
    name: string;
    surname: string;
    phone: Nullable<string>;
    email: Nullable<string>;
    is_client: false;
    created_at: Date;
    updated_at: Date;
  };

  type Client = {
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
  };

  type OrderDetails = {
    residency: string;
    visa_type: string;
    visa_status: ApplicationStatuses;
    destination: string;
    travel_date_from: Nullable<Date>;
    travel_date_to: Nullable<Date>;
    service_title: string;
  };

  type SingleOrder = {
    id: number;
    applicant_visa: number;
    b2b: Nullable<string>;
    applicant: Applicant;
    client: Client;
    submitted_form_id: string;
    notes: Nullable<string>;
    documents: Nullable<string>;
    details: OrderDetails;
    status: {
      key: number;
      value: string;
    };
    source: string;
    priority: `${number}`;
    order_date: Date;
    due_date: Date;
    order_type: "evisa" | string;
    consulate_appointment_date: Date;
    user: unknown;
    service_id: number;
  };

  type MultipleOrderResponse = {
    data: {
      id: number;
      is_multiple_order: boolean;
      countries: Array<string>;
      status: {
        status_key: number;
        status_value: string;
      };
      client: Client;
      orders: Array<SingleOrder>;
      source: string;
      payment_status: "pending" | string;
      created_at: Date;
      updated_at: Date;
    };
  };

  type ApplicationStatuses = "pending" | "processing" | "done";
}
