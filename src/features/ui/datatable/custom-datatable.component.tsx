import React from "react";

interface Product {
  item: string;
  store: string;
  runner: string;
  amount: string;
  cardNo: string;
  date: string;
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
        <div className="text-3xl font-bold text-blue-600 mb-4">{title}</div>

        {/* Add Button */}
        <div className="mb-4 justify-items-end">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
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
            <tr className="bg-blue-200">
              {columns.map((column, index) => (
                <th key={index} className="p-3 border">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((product, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-3 border">
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
