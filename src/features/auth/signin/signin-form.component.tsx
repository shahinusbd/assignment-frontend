import { Form } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export function SignInForm() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#2563EB] w-[80%] h-full">
        <img
          src="login-image.png"
          alt="logo"
          className="object-cover h-full w-full"
        />
      </div>
      <Form className="col-span-1 ml-[-100px]">
        <div className="p-28">
          <div className="w-[461px]">
            <h1 className="font-bold text-[#090914] text-5xl w-[400px] h-[62px]">
              Welcome Back!
            </h1>
            <p className="text-[#52525B] pt-6 w-[461px] h-[60px]">
              Clarity gives you the blocks and components you <br />
              need to create a truly professional website.
            </p>
          </div>
          <div className="pt-28">
            <div>
              <div>
                <span className="text-[#090914] w-[115px] h-[24px]">
                  Email address
                </span>
              </div>
              <div>
                {" "}
                <InputText
                  className="p-inputtext-md py-2 mt-4 w-[526px] h-[60px]"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mt-6">
                <span className="text-[#090914] w-[115px] h-[24px]">
                  Password
                </span>
              </div>
              <div className="w-full">
                {" "}
                <Password
                  className="mt-4 w-[526px] h-[60px]"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <div className="pt-14">
              {" "}
              <Button
                type="submit"
                label="Sign In"
                className="w-[160px] h-[55px] bg-blue-600 text-white"
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
