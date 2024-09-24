import { ValidationErrorMessageType } from "features/api";
import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { Password, PasswordProps } from "primereact/password";
import { useId } from "react";
import { FieldContainer } from "./field-container.component";

type PasswordFieldProps = PasswordProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  passwordClassName?: string;
  inputFieldClassName?: string;
  height?: string;
};

function PasswordField({
  name,
  id,
  label,
  disabled,
  className = "",
  error,
  helperText,
  passwordClassName = "",
  inputFieldClassName = "",
  height = "auto",
  ...rest
}: PasswordFieldProps) {
  const generatedID = useId();
  const inputId = id || generatedID;
  return (
    <FieldContainer>
      {label && (
        <label style={{ color: "#2D3748" }} htmlFor={inputId}>
          {label}
        </label>
      )}

      <Password
        className={`p-inputtext-sm ${passwordClassName}`}
        inputId={inputId}
        name={name}
        disabled={disabled}
        toggleMask
        inputClassName={`w-full ${inputFieldClassName || ""}`}
        {...rest}
      />

      {error && <small className={"p-error"}>{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </FieldContainer>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: ValidationErrorMessageType;
  passwordFieldProps?: PasswordFieldProps;
};

export function FormikPassWordField({
  passwordFieldProps: numberFieldProps,
  apiError,
  disabled,
  ...rest
}: FormikTextFieldProps) {
  return (
    <Field {...rest}>
      {({
        field,
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps<number>) => (
        <PasswordField
          {...field}
          {...numberFieldProps}
          disabled={disabled || isSubmitting}
          error={!!apiError || (touched && !!error)}
          style={{ height: "2.5rem" }}
          helperText={
            apiError
              ? apiError
              : touched && !!error
              ? (error as string)
              : numberFieldProps?.helperText
          }
        />
      )}
    </Field>
  );
}
