export type Order = {
  created_at: string;
  customer_company: string | null;
  customer_email: string;
  customer_id: string;
  customer_name: string;
  fulfillment_delivered_at: Date;
  fulfillment_status: string;
  order_date: Date;
  order_id: string;
  payment_currency: string;
  payment_due_date: string | null;
  payment_failure_reason: string | null;
  payment_invoice_number: string | null;
  payment_method: string;
  payment_refund_reason: string | null;
  payment_refunded_at: string | null;
  payment_status: string;
  payment_total: number;
  status: "processing" | "completed" | "refunded" | "failed";
};

export type PieChartData = {
  name: string;
  value: number;
};

export type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  transactionCompleted: boolean;
  created_at: Date;
};
