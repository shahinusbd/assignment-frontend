import * as yup from "yup";

const requiredMessage = "${label} is required";
const MaterialPurchase = yup.object({
  line_item_name: yup
    .string()
    .label("Line Item Name")
    .required(requiredMessage),
  store: yup.string().label("Store").required(requiredMessage),
  runners_name: yup.string().label("Runners Name").required(requiredMessage),
  amount: yup.number().label("Amount").required(requiredMessage),
  card_number: yup
    .string()
    .label("Card Number")
    .required(requiredMessage)
    .max(5, "Card Number must be 5 characters")
    .min(5, "Card Number must be 5 characters"),
  transaction_date: yup
    .string()
    .label("Transaction Date")
    .required(requiredMessage),
});
export const MaterialPurchaseCreateSchema = yup.object({
  material_purchase: yup.array().of(MaterialPurchase).required(requiredMessage),
});

export type MaterialPurchaseCreate = yup.InferType<
  typeof MaterialPurchaseCreateSchema
>;

export const InitialValue: MaterialPurchaseCreate = {
  material_purchase: [
    {
      line_item_name: "",
      store: "",
      runners_name: "",
      amount: 0,
      card_number: "",
      transaction_date: "",
    },
  ],
};

export interface MaterialPurchaseCreateResponse {
  isSuccess?: string;
  statusCode?: number;
  status?: string;
  message?: string;
  data?: null;
}
