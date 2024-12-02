import { Formik, FormikHelpers } from "formik";

import { CreateSignUp } from "@/features/api/auth-endpoint";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { InitialValue, SignUpCreate, SignUpFormSchema } from "./form.config";
import { SignUpForm } from "./siginup-form.component";

export const SignUp = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = async (
    values: SignUpCreate,
    { setSubmitting, setErrors }: FormikHelpers<SignUpCreate>
  ) => {
    try {
      setLoading(true); // Start the submit spinner/loading state
      // Send a POST request to the login endpoint
      const response = await axios.post<any>(CreateSignUp, {
        email: values.email,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        date_of_birth: values.dateOfBirth,
      });

      // Check if the response has an accessToken and redirect to the dashboard
      if (response?.data?.status_code === "1") {
        localStorage.setItem("access_token", response?.data.access_token);
        localStorage.setItem("email", response?.data?.user_data?.email);
        // Redirect to the dashboard page
        push("/dashboard");
        toast.success(response?.data?.status_message);
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
      validationSchema={SignUpFormSchema}
      onSubmit={handleSubmit}
    >
      <SignUpForm loading={loading} />
    </Formik>
  );
};
