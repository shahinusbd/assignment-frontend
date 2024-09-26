import { ErrorMessage, Field, FieldProps, Form } from "formik";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
export const MaterialPurchaseForm = () => {
  // State to manage form rows
  const [rows, setRows] = useState([
    {
      line_item_name: "",
      store: "",
      runners_name: "",
      amount: "",
      card_number: "",
      transaction_date: null,
    },
  ]);

  // Handler to add a new row (duplicate the last one)
  const addRow = () => {
    setRows([
      ...rows,
      {
        line_item_name: "",
        store: "",
        runners_name: "",
        amount: "",
        card_number: "",
        transaction_date: null,
      },
    ]);
  };

  // Handler to delete a row
  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <Form className="space-y-4 p-4">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-300 p-2 text-left">Items*</th>
            <th className="border border-gray-300 p-2 text-left">Store*</th>
            <th className="border border-gray-300 p-2 text-left">
              Runner's Name*
            </th>
            <th className="border border-gray-300 p-2 text-left">Amount*</th>
            <th className="border border-gray-300 p-2 text-left">Card No.*</th>
            <th className="border border-gray-300 p-2 text-left">
              Transaction Date*
            </th>
            <th className="border border-gray-300 p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                <Field
                  name={`material_purchase[${index}].line_item_name`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <InputText
                      {...field}
                      className="w-full p-inputtext p-component"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].line_item_name`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Field
                  name={`material_purchase[${index}].store`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <InputText
                      {...field}
                      className="w-full p-inputtext p-component"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].store`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Field
                  name={`material_purchase[${index}].runners_name`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <InputText
                      {...field}
                      className="w-full p-inputtext p-component"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].runners_name`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Field
                  name={`material_purchase[${index}].amount`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <InputText
                      {...field}
                      className="w-full p-inputtext p-component"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].amount`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Field
                  name={`material_purchase[${index}].card_number`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <InputText
                      {...field}
                      className="w-full p-inputtext p-component"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].card_number`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Field
                  /* name={`material_purchase[${index}].transaction_date`} */
                  name={`transaction_date`}
                  required
                >
                  {({ field }: { field: FieldProps["field"] }) => (
                    <Calendar
                      {...field}
                      dateFormat="mm/dd/yy"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name={`material_purchase[${index}].transaction_date`}
                  component="div"
                  className="text-red-600"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <div className="flex space-x-2">
                  <HiOutlineTrash
                    onClick={() => deleteRow(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end rounded shadow-lg">
        <FaCirclePlus
          onClick={addRow}
          className="h-[26.63px] w-[26.63px] cursor-pointer bg-[#F7F9FC] rounded-full border border-[#E2E8F0] text-[#2563EB] mr-2.5 mb-2.5"
        />
      </div>
      <div className="flex justify-end">
        {" "}
        <Button
          type="submit"
          label="Save"
          className="mt-3 bg-[#2563EB] text-white w-[113px] h-[46px]"
        />
      </div>
    </Form>
  );
};
