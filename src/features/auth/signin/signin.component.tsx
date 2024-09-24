import { Formik } from "formik";
import { InitialValue, SignInFormSchema } from "./form.config";
import { SignInForm } from "./signin-form.component";

export const SignIn = () => {
  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={SignInFormSchema}
      onSubmit={() => {}}
    >
      <SignInForm />
    </Formik>
  );
};
