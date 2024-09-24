import { Formik, FormikHelpers } from "formik";

import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  InitialValue,
  SignInCreate,
  SignInCreateResponse,
  SignInFormSchema,
} from "./form.config";
import { SignInForm } from "./signin-form.component";

export const SignIn = () => {
  const { push } = useRouter();

  // Function to handle form submission
  const handleSubmit = async (
    values: SignInCreate,
    { setSubmitting, setErrors }: FormikHelpers<SignInCreate>
  ) => {
    try {
      // Send a POST request to the login endpoint
      const response = await axios.post<SignInCreateResponse>(
        "https://devapi.propsoft.ai/api/interview/login",
        values
      );

      console.log("response: " + JSON.stringify(response));

      // Check if the response has an accessToken and redirect to the dashboard
      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        // Redirect to the dashboard page
        push("/dashboard");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error: any) {
      // Handle API errors
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false); // Stop the submit spinner/loading state
    }
  };

  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={SignInFormSchema}
      onSubmit={handleSubmit}
    >
      <SignInForm />
    </Formik>
  );
};
