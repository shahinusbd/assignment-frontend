import { CustomInputField } from "@/components/common/CustomInputField";
import { Button } from "@/components/ui/button";
import { Form } from "formik";
import { Facebook, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SignUpCreate {
  loading: boolean;
}

export function SignUpForm({ loading }: SignUpCreate) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 backdrop-blur-3xl"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        <div className="relative w-5/12 mx-auto pt-12 mr-32">
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 space-y-6 shadow-xl">
            <div className="text-center">
              <img
                className="h-12 w-12 bg-blue-500/20 rounded-xl mx-auto mb-2"
                src="31281986_e.svg"
                alt="logo"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white text-center">
                Create an account
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <CustomInputField
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                />
                <CustomInputField
                  label="Last name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <CustomInputField
                label="Email or phone number"
                name="email"
                type="email"
                placeholder="name@example.com"
              />

              <CustomInputField
                label="Date of birth"
                name="dateOfBirth"
                type="date"
                placeholder="MM/DD/YYYY"
              />

              <div className="grid grid-cols-2 gap-4">
                <CustomInputField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <CustomInputField
                  label="Confirm password"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="terms"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-white/70"
                >
                  I agree to all the{" "}
                  <a
                    href="#"
                    className="text-blue-400 underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-400 underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Create account
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center pt-6">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-transparent px-2 text-white/70">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <Github className="h-4 w-4 text-white" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>

            <div className="text-center text-sm">
              <span className="text-white/70">Already have an account? </span>
              <Link
                href="/"
                className="px-0 text-white font-medium hover:text-white/90 hover:underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>

        <style
          jsx
          global
        >{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
          }
        `}</style>
      </div>
    </Form>
  );
}
