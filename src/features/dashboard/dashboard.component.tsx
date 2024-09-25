import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../ui";
import { CustomDataTable } from "../ui/datatable/custom-datatable.component";
import { toast } from "react-toastify";
import { ProgressSpinner } from "primereact/progressspinner";
import { Paginator } from "primereact/paginator";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { MaterialPurchase } from "../material-purchase/material-purchase.component";

export const DashBoard = () => {
  const [products, setProducts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [modal, setModal] = useState<boolean>(false);

  const accessToken = localStorage.getItem("access_token");

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
        const total = response.data.material_purchase_list.total;

        const formattedData = data.map((item: any) => ({
          item: item.line_item_name,
          store: item.store,
          runner: item.runners_name,
          amount: `$${item.amount}`,
          cardNo: item.card_number,
          date: item.transaction_date,
        }));

        setProducts(formattedData);
        setTotalRecords(total);
        setLoading(false);
      } catch (err) {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken, currentPage]);

  const columns = [
    { label: "ITEMS", field: "item" },
    { label: "STORE", field: "store" },
    { label: "Runner's Name", field: "runner" },
    { label: "AMOUNT", field: "amount" },
    { label: "CARD NO.", field: "cardNo" },
    { label: "TRANSACTION DATE", field: "date" },
  ] as const;

  const onPageChange = (e: any) => {
    setCurrentPage(e.page + 1);
  };

  // Handle add button click
  const handleAddClick = () => {
    setModal(true);
  };

  return (
    <div className="">
      <Navbar />
      <MaterialPurchase />
    </div>
  );
};
