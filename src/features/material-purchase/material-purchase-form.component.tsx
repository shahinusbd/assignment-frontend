import { useState } from "react";
import { Form } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
export const MaterialPurchaseForm = () => {
  // State to manage form rows
  const [rows, setRows] = useState([
    {
      item: "",
      store: "",
      runner: "",
      amount: "",
      cardNumber: "",
      transactionDate: null,
    },
  ]);

  // Handler to add a new row (duplicate the last one)
  const addRow = () => {
    setRows([
      ...rows,
      {
        item: "",
        store: "",
        runner: "",
        amount: "",
        cardNumber: "",
        transactionDate: null,
      },
    ]);
  };

  // Handler to delete a row
  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  // Handler to update row data
  const handleInputChange = (index: number, field: any, value: any) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
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
                <InputText
                  placeholder="Item 1"
                  className="w-full p-inputtext p-component"
                  value={row.item}
                  onChange={(e) =>
                    handleInputChange(index, "item", e.target.value)
                  }
                  required
                />
              </td>

              <td className="border border-gray-300 p-2">
                <InputText
                  placeholder="Construction"
                  className="w-full p-inputtext p-component"
                  value={row.store}
                  onChange={(e) =>
                    handleInputChange(index, "store", e.target.value)
                  }
                  required
                />
              </td>

              <td className="border border-gray-300 p-2">
                <InputText
                  placeholder="Alex Mershel"
                  className="w-full p-inputtext p-component"
                  value={row.runner}
                  onChange={(e) =>
                    handleInputChange(index, "runner", e.target.value)
                  }
                  required
                />
              </td>

              <td className="border border-gray-300 p-2">
                <InputText
                  placeholder="$100"
                  className="w-full p-inputtext p-component"
                  value={row.amount}
                  onChange={(e) =>
                    handleInputChange(index, "amount", e.target.value)
                  }
                  required
                />
              </td>

              <td className="border border-gray-300 p-2">
                <InputText
                  placeholder="12311"
                  className="w-full p-inputtext p-component"
                  value={row.cardNumber}
                  onChange={(e) =>
                    handleInputChange(index, "cardNumber", e.target.value)
                  }
                  required
                />
              </td>

              <td className="border border-gray-300 p-2">
                <Calendar
                  showIcon
                  dateFormat="dd/mm/yy"
                  placeholder="Select Date"
                  className="w-full"
                  value={row.transactionDate}
                  onChange={(e) =>
                    handleInputChange(index, "transactionDate", e.value)
                  }
                  required
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
          style={{
            height: "26.63px",
            width: "26.63px",
            cursor: "pointer",
            backgroundColor: "#F7F9FC",
            borderRadius: "50%",
            border: "1px solid #E2E8F0",
            color: "#2563EB",
            marginRight: 10,
            marginBottom: 10,
          }}
        />
      </div>
      <div className="flex justify-end">
        {" "}
        <Button
          label="Save"
          className="mt-3 bg-[#2563EB] text-white w-[113px] h-[46px]"
        />
      </div>
    </Form>
  );
};
