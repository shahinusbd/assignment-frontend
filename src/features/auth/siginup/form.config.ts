import * as yup from "yup";

const requiredMessage = "${label} is required";
export const SignUpFormSchema = yup.object({
  email: yup.string().email().label("Email").required(requiredMessage),
  password: yup.string().label("Password").min(6).required(requiredMessage),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  firstName: yup.string().label("First name").required(requiredMessage),
  lastName: yup.string().label("Last name").required(requiredMessage),
  dateOfBirth: yup.date().label("Date of birth").required(requiredMessage),
});

export type SignUpCreate = yup.InferType<typeof SignUpFormSchema>;

export const InitialValue: SignUpCreate = {
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  email: "",
  password: "",
};

export interface SignUpCreateResponse {
  isSuccess?: string;
  statusCode?: number;
  status?: string;
  message?: string;
  data?: null;
}
