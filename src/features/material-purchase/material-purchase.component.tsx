import { Button } from "@/components/ui/button";

import axios from "axios";
import { Table, TableCellsSplit, TableRowsSplit } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";

export const MaterialPurchase = () => {
  const [products, setProducts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddClick = () => {
    setModalOpen(true);
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
        toast.success(response.data.status_message);
        fetchData();
        setModalOpen(false);
      } else {
        toast.error(response.data.status_message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  const columns = [
    { label: "ITEMS", field: "line_item_name" },
    { label: "STORE", field: "store" },
    { label: "Runner's Name", field: "runners_name" },
    { label: "AMOUNT", field: "amount" },
    { label: "CARD NO.", field: "card_number" },
    { label: "TRANSACTION DATE", field: "transaction_date" },
  ];

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CgSpinner />
        </div>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.field}
                    className="px-4 py-2 text-left text-sm font-semibold"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <TableRowsSplit key={index}>
                  {columns.map((column) => (
                    <TableCellsSplit
                      key={column.field}
                      className="px-4 py-2"
                    >
                      {product[column.field]}
                    </TableCellsSplit>
                  ))}
                </TableRowsSplit>
              ))}
            </tbody>
          </Table>

          <Button
            onClick={handleAddClick}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
          >
            Add Material Purchase
          </Button>
        </>
      )}

      {/* <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Material Purchase</DialogTitle>
          </DialogHeader>
          <Formik
            initialValues={InitialValue}
            validationSchema={MaterialPurchaseCreateSchema}
            onSubmit={handleSubmit}
          >
            <MaterialPurchaseForm />
          </Formik>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};
