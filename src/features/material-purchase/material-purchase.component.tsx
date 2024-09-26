import axios from "axios";
import { Formik } from "formik";
import moment from "moment";
import { Dialog } from "primereact/dialog";
import { Paginator } from "primereact/paginator";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomDataTable } from "../ui/datatable/custom-datatable.component";
import { InitialValue, MaterialPurchaseCreateSchema } from "./form.config";
import { MaterialPurchaseForm } from "./material-purchase-form.component";

export const MaterialPurchase = () => {
  const [products, setProducts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [modal, setModal] = useState<boolean>(false);

  const accessToken = localStorage.getItem("access_token");

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
        line_item_name: item.line_item_name,
        store: item.store,
        runners_name: item.runners_name,
        amount: `$${item.amount}`,
        card_number: item.card_number,
        transaction_date: moment(item.transaction_date).format("DD MMM, YYYY"),
      }));

      setProducts(formattedData);
      setTotalRecords(total);
      setLoading(false);
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [accessToken, currentPage]);

  const columns = [
    { label: "ITEMS", field: "line_item_name" },
    { label: "STORE", field: "store" },
    { label: "Runner's Name", field: "runners_name" },
    { label: "AMOUNT", field: "amount" },
    { label: "CARD NO.", field: "card_number" },
    {
      label: "TRANSACTION DATE",
      field: "transaction_date",
    },
  ] as const;

  const onPageChange = (e: any) => {
    setCurrentPage(e.page + 1);
  };

  // Handle add button click
  const handleAddClick = () => {
    setModal(true);
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await axios.post(
        "https://devapi.propsoft.ai/api/auth/interview/material-purchase",
        { material_purchase: values.material_purchase },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.status_code === "1") {
        console.log(response.data.status_message);
        toast.success(response.data.status_message);
        fetchData();
        setModal(false);
      } else {
        console.log(response.data.status_message);
        toast.error(response.data.status_message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      {loading ? (
        <ProgressSpinner />
      ) : (
        <>
          <CustomDataTable
            data={products}
            columns={columns as any}
            title="Material Purchase"
            onAddClick={handleAddClick} // Pass the handler here
          />

          <Paginator
            first={(currentPage - 1) * rowsPerPage}
            rows={rowsPerPage}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
          />
        </>
      )}
      <Dialog
        visible={modal}
        onHide={() => {
          if (!modal) return;
          setModal(false);
        }}
        modal={true}
        header="Add Material Purchase"
        headerStyle={{
          backgroundColor: "#2563EB",
          color: "#FFFFFF",
          textAlign: "center",
        }}
        style={{ width: "70vw" }}
      >
        <Formik
          initialValues={InitialValue}
          validationSchema={MaterialPurchaseCreateSchema}
          onSubmit={handleSubmit}
        >
          <MaterialPurchaseForm />
        </Formik>
      </Dialog>
    </div>
  );
};
