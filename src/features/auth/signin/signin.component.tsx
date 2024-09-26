import { Formik, FormikHelpers } from "formik";

import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { InitialValue, SignInCreate, SignInFormSchema } from "./form.config";
import { SignInForm } from "./signin-form.component";

export const SignIn = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = async (
    values: SignInCreate,
    { setSubmitting, setErrors }: FormikHelpers<SignInCreate>
  ) => {
    try {
      setLoading(true); // Start the submit spinner/loading state
      // Send a POST request to the login endpoint
      const response = await axios.post<any>(
        "https://devapi.propsoft.ai/api/interview/login",
        values
      );

      // Check if the response has an accessToken and redirect to the dashboard
      if (response?.data?.status_code === "1") {
        localStorage.setItem("access_token", response?.data.access_token);
        localStorage.setItem("email", response?.data?.user_data?.email);

        toast.success(response?.data?.status_message);
        // Redirect to the dashboard page
        push("/dashboard");
      } else {
        toast.error(response?.data?.status_message);
      }
    } catch (error: any) {
      toast.error("An error occurred while submitting the form.");
      setErrors({ email: error?.response?.data?.message });
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
      <SignInForm loading={loading} />
    </Formik>
  );
};
