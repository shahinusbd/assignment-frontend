import { ErrorMessage, Field, FieldProps, Form } from "formik"; // Import Field and ErrorMessage from Formik
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

interface SignInCreate {
  loading: boolean;
}

export function SignInForm({ loading }: SignInCreate) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] min-h-screen">
      <div className="bg-[#2563EB] w-full h-64 md:h-full">
        <img
          src="login-image.png"
          alt="logo"
          className="object-cover w-full h-full"
        />
      </div>

      <Form className="col-span-1 flex items-center justify-left p-6 md:p-20">
        <div className="w-full max-w-md mx-auto ml-14">
          <h1 className="font-bold text-[#090914] text-3xl md:text-5xl">
            Welcome Back!
          </h1>
          <p className="text-[#52525B] pt-4 md:pt-6 text-sm md:text-base">
            Clarity gives you the blocks and components you{" "}
            <br className="hidden md:block" />
            need to create a truly professional website.
          </p>
          <div className="pt-10 md:pt-28">
            <div>
              <label className="text-[#090914] block">Email address</label>
              <Field name="email">
                {({ field }: { field: FieldProps["field"] }) => (
                  <InputText
                    {...field}
                    className="p-inputtext-md py-2 mt-2 w-full h-[50px]"
                    id="email"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="mt-6">
              <label className="text-[#090914] block">Password</label>
              <Field name="password">
                {({ field }: { field: FieldProps["field"] }) => (
                  <Password
                    {...field}
                    className="mt-2 w-full h-[50px]"
                    id="password"
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="pt-10 md:pt-14">
              <Button
                type="submit"
                label="Sign In"
                className="w-full md:w-[160px] h-[50px] bg-blue-600 text-white"
                loading={loading}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
