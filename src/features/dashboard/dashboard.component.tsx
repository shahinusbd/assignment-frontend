import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../ui";
import { CustomDataTable } from "../ui/datatable/custom-datatable.component";
import { toast } from "react-toastify";
import { DataTable } from "primereact/datatable"; // Importing PrimeReact DataTable
import { ProgressSpinner } from "primereact/progressspinner";
import { Paginator } from "primereact/paginator"; // Importing PrimeReact Paginator

export const DashBoard = () => {
  // State to hold the API data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20); // Adjust this based on API response

  // Access token (replace this with the actual token source)
  const accessToken = localStorage.getItem("access_token");

  // Fetch data from the API when the component mounts or when the page changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://devapi.propsoft.ai/api/auth/interview/material-purchase?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = response.data.material_purchase_list.data;
        const total = response.data.material_purchase_list.total; // Get total record count

        // Map data to the format expected by your table
        const formattedData = data.map((item: any) => ({
          item: item.line_item_name,
          store: item.store,
          runner: item.runners_name,
          amount: `$${item.amount}`, // Formatting amount with a dollar sign
          cardNo: item.card_number,
          date: item.transaction_date,
        }));

        setProducts(formattedData);
        setTotalRecords(total); // Set total records for pagination
        setLoading(false);
      } catch (err) {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken, currentPage]);

  // Define column headers for the table
  const columns = [
    { label: "ITEMS", field: "item" },
    { label: "STORE", field: "store" },
    { label: "Runner's Name", field: "runner" },
    { label: "AMOUNT", field: "amount" },
    { label: "CARD NO.", field: "cardNo" },
    { label: "TRANSACTION DATE", field: "date" },
  ] as const;

  // Handle page change
  const onPageChange = (e: any) => {
    setCurrentPage(e.page + 1); // PrimeReact pages are zero-indexed
  };

  return (
    <div className="">
      <Navbar />
      {loading ? (
        <ProgressSpinner />
      ) : (
        <>
          <CustomDataTable
            data={products}
            columns={columns as any}
            title="Material Purchase"
          />

          {/* PrimeReact Paginator */}
          <Paginator
            first={(currentPage - 1) * rowsPerPage}
            rows={rowsPerPage}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};
