import React from "react";

interface Product {
  line_item_name: string;
  store: string;
  runners_name: string;
  amount: string;
  card_number: string;
  transaction_date: string;
}

interface Column {
  label: string;
  field: keyof Product;
}

interface CustomDataTableProps {
  data: Product[];
  columns: Column[];
  title: string;
  onAddClick: () => void; // Add this line
}

export const CustomDataTable: React.FC<CustomDataTableProps> = ({
  data,
  columns,
  title,
  onAddClick, // Destructure the new prop here
}) => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        {/* Title */}
        <div className="text-3xl font-bold text-[#2563EB] mb-4">{title}</div>

        {/* Add Button */}
        <div className="mb-4 justify-items-end">
          <button
            className="bg-[#2563EB] text-white px-4 py-2 rounded h-11"
            onClick={onAddClick} // Use the handler here
          >
            Add {title}
          </button>
        </div>
      </div>

      {/* Custom Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#2563EB99] text-[#FFFFFF]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="p-3 border"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((product, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-[#2563EB1A]" : ""}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-3 border border-white"
                  >
                    {product[column.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
