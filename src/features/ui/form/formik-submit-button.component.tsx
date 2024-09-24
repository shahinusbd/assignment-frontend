import { useFormikContext } from "formik";
import { Button, ButtonProps } from "primereact/button";
import { CgSpinner } from "react-icons/cg";

export const FormikSubmitButton = ({
  type = "submit",
  disabled,
  loadingIcon = <CgSpinner className="icon-spin mr-1" />,
  className = "px-3 text-base border-round-md border-none bg-primary-500 text-white cursor-pointer",
  ...rest
}: ButtonProps) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type={type}
      disabled={disabled || isSubmitting}
      loading={isSubmitting}
      loadingIcon={loadingIcon}
      className={`${className} text-white`}
      style={{
        backgroundColor: "#00aee5",
      }}
      {...rest}
    />
  );
};
