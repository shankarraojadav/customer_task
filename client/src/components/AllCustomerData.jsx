import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getAllCustomers } from "../redux/actions";
import CustomerDetailsModal from "./customerdetails/CustomerDetailsModal";
import { DataContext } from "../context/dataContext";
import EditCustomerModal from "./customerdetails/editCustomer";
import DeleteModal from "./deleteModal";

export default function AllCustomerData() {
  const { openEditModal, setOpenEditModal } = useContext(DataContext);

  const [editData, setEditData] = useState();
  const [editId, setEditId] = useState();

  const { customersData } = useSelector((state) => state.allCustomers || {});

  const { addData } = useSelector((state) => state.addCustomers || {});

  const { deleteData } = useSelector((state) => state.deleteCustumer || {});

  const { editedData } = useSelector((state) => state.editCustomer || {});

  const dispatch = useDispatch();
  console.log("dd", addData);
  console.log(addData?.status);

  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);

  useEffect(() => {
    if (addData?.status) {
      dispatch(getAllCustomers());
    } else if (deleteData?.status) {
      dispatch(getAllCustomers());
    }
    else if (editData?.status) {
      dispatch(getAllCustomers());
    }
  }, [addData,editedData,deleteData]);

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const handleEdit = (id) => {
    const customerToEdit = customersData.find(
      (customer) => customer._id === id
    );
    if (customerToEdit) {
      setEditData(customerToEdit);
      setEditId(id);
    }
    setOpenEditModal(true);
  };
  // Table Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ mt: "10vh" }}>
      <Box sx={{ ml: "20vh" }}>
        <Typography>Customer List</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "20vh" }}>
        <CustomerDetailsModal />
        <EditCustomerModal editData={editData} editId={editId} />
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          mt: "3vh",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Languages</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersData &&
                (rowsPerPage > 0
                  ? customersData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : customersData
                ).map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{customer.fullName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{customer.state}</TableCell>
                    <TableCell>{customer.languages}</TableCell>
                    <TableCell>{customer.date}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(customer._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={{ ml: "2vh" }}
                        
                      >
                        <DeleteModal customerId={customer._id} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={customersData ? customersData.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
