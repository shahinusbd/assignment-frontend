import * as yup from "yup";

const requiredMessage = "${label} is required";
export const SignInFormSchema = yup.object({
  email: yup.string().email().required(requiredMessage),
  password: yup.string().label("Password").min(6).required(requiredMessage),
});

export type SignInCreate = yup.InferType<typeof SignInFormSchema>;

export const InitialValue: SignInCreate = {
  email: "",
  password: "",
};

export interface SignInCreateResponse {
  isSuccess?: string;
  statusCode?: number;
  status?: string;
  message?: string;
  data?: null;
}
