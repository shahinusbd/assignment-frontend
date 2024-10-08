"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInFormSchema } from "./form.config";

interface SignInCreate {
  loading: boolean;
}

export function SignInForm({ loading }: SignInCreate) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[45%_55%] transition-all duration-300 ease-in-out">
      <div className="bg-[#a0c5ff] w-full h-48 sm:h-64 lg:h-full relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1728383386~exp=1728386986~hmac=a0180fdde1c458bcadd58f1bae8b130bb7dda64da9a73acc0ad599ed76447d3e&w=1380"
          alt="Login background"
          style={{ objectFit: "cover" }}
          className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        {/*  <div className="absolute bottom-20 right-70 p-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Logistics System
          </h1>
        </div> */}
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInFormSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex items-center justify-center p-6 lg:p-20">
            <div className="w-full max-w-md space-y-8 animate-fadeIn">
              <div className="text-center lg:text-left">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl transition-all duration-300 ease-in-out">
                  Welcome Back!
                </h1>
                <p className="text-muted-foreground mt-4 text-sm sm:text-base transition-all duration-300 ease-in-out">
                  Clarity gives you the blocks and components you need to create
                  a truly professional website.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm sm:text-base transition-all duration-300 ease-in-out"
                  >
                    Email address
                  </Label>
                  <Field name="email">
                    {({ field }: { field: any }) => (
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`transition-all duration-300 ease-in-out ${
                          errors.email && touched.email
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-destructive text-sm animate-fadeIn"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm sm:text-base transition-all duration-300 ease-in-out"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Field name="password">
                      {({ field }: { field: any }) => (
                        <Input
                          {...field}
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className={`pr-10 transition-all duration-300 ease-in-out ${
                            errors.password && touched.password
                              ? "border-destructive"
                              : ""
                          }`}
                        />
                      )}
                    </Field>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        Toggle password visibility
                      </span>
                    </Button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-destructive text-sm animate-fadeIn"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-300 ease-in-out transform hover:scale-105"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
