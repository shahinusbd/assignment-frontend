import { ErrorMessage, Field, FieldProps, Form } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

interface SignInCreate {
  loading: boolean;
}

export function SignInForm({ loading }: SignInCreate) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Sidebar Section */}
      <div className="bg-[#2563EB] w-full h-full flex items-center justify-center p-6">
        <div className="text-white text-center">
          <h1 className="font-bold text-4xl lg:text-5xl mb-4">
            Welcome to our community
          </h1>
          <p className="mb-8">
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <p>
              "We love Landingfolio! Our designers were using it for their
              projects, so we already knew what kind of design they want."
            </p>
          </div>
          <div className="mt-6">
            <div className="flex justify-center items-center space-x-2">
              <img
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                alt="Devon Lane"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p>Devon Lane</p>
                <span>Co-Founder, Design.co</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <Form className="flex flex-col justify-center px-10 py-20 lg:ml-[-100px]">
        <div className="w-full max-w-md mx-auto">
          <h1 className="font-bold text-[#090914] text-5xl mb-6">
            Welcome Back!
          </h1>
          <p className="text-[#52525B] mb-10">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>

          {/* Email Field */}
          <div className="mb-6">
            <label
              className="block text-[#090914] mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <Field name="email">
              {({ field }: { field: FieldProps["field"] }) => (
                <InputText
                  {...field}
                  id="email"
                  className="p-inputtext-md w-full h-[60px] py-2"
                />
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-[#090914] mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field name="password">
              {({ field }: { field: FieldProps["field"] }) => (
                <Password
                  {...field}
                  id="password"
                  className="w-full h-[60px] py-2"
                />
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            label="Sign In"
            className="w-full h-[55px] bg-blue-600 text-white"
            loading={loading}
          />
        </div>
      </Form>
    </div>
  );
}
