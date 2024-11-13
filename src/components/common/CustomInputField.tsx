import { Label } from "@/components/ui/label";
import { ErrorMessage, Field } from "formik";
import { Input } from "../ui/input";

interface CustomInputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export function CustomInputField({
  label,
  name,
  type = "text",
  placeholder = "",
}: CustomInputFieldProps) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={name}
        className="text-white"
      >
        {label}
      </Label>
      <Field
        as={Input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
      />
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 text-xs">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
