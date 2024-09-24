import { ValidationErrorMessageType } from "features/api";
import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { Button } from "primereact/button";
import { InputText, InputTextProps } from "primereact/inputtext";
import { useId } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FieldContainer } from "./field-container.component";

type TextFieldProps = InputTextProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  requiredIcon?: string;
  showSearchIcon?: boolean;
  handleSearch?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  height?: string;
  style?: React.CSSProperties; // Add this line to accept inline styles
};

function TextField({
  name,
  id,
  label,
  placeholder,
  disabled,
  className = "",
  error,
  helperText,
  inputClassName = "",
  containerClassName,
  showSearchIcon,
  requiredIcon,
  handleSearch,
  height = "auto",
  style = {}, // Default empty object
  ...rest
}: TextFieldProps) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <FieldContainer className={containerClassName} style={style}>
      <div className="w-5">
        {label && (
          <label style={{ color: "#2D3748" }} htmlFor={inputId}>
            {label}
          </label>
        )}
        {requiredIcon && <label style={{ color: "red" }}>{requiredIcon}</label>}
      </div>
      <div className="flex-1 flex flex-row items-center">
        <InputText
          className={`p-inputtext-md py-2 w-full 
          ${showSearchIcon ? "border-noround-right" : ""} 
          ${inputClassName} 
          ${error ? "p-invalid" : ""}`}
          id={inputId}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          style={style} // Apply the style prop here
          {...rest}
        />

        {showSearchIcon && (
          <Button
            className="border-noround-left input-text-btn"
            disabled={disabled}
            type="button"
            onClick={handleSearch}
            style={{
              padding: ".5rem",
              borderColor: "#A7A7A7",
              ...style, // Merge button-specific styles with the passed style
            }}
          >
            <AiOutlineSearch size={18} className="text-color" />
          </Button>
        )}
      </div>

      {error && <small className={"p-error"}>{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </FieldContainer>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: ValidationErrorMessageType;
  textFieldProps?: TextFieldProps;
};

export function FormikTextField({
  textFieldProps,
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
      }: FieldProps<string>) => (
        <TextField
          {...field}
          {...textFieldProps}
          disabled={disabled || isSubmitting}
          error={!!apiError || (touched && !!error)}
          helperText={
            apiError
              ? apiError
              : touched && !!error
              ? (error as string)
              : textFieldProps?.helperText
          }
        />
      )}
    </Field>
  );
}
