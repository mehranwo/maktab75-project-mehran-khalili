import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useDispatch } from "react-redux";
import {
  selectedDeletedProduct,
  editedProduct,
} from "../../redux/actions/productsActions";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { deleteData } from "../../api/api";
import EditModal from "components/modals/EditModal";
import AddModal from "components/modals/addModal";
import Swal from "sweetalert2";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductTable({ rows, getAllData ,count}) {
  const [open, setOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleClickOpenAddModal = () => {
    setOpenAddModal(true);
  };
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const HandleDelete = async (product) => {
    await deleteData("products", product.id);
    getAllData("products");
  };

  return (
    <>
      <Button
        color="info"
        variant="outlined"
        onClick={() => handleClickOpenAddModal()}
      >
        افزودن کالا
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">تصویر</TableCell>
              <TableCell align="center">نام</TableCell>
              <TableCell align="center">برند</TableCell>
              <TableCell align="center">حذف</TableCell>
              <TableCell align="center">ویرایش</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{ width: "120px", height: "150px" }}
                  >
                    <img
                      src={`http://localhost:3003/files/${row.src && row?.src[0]}`}
                      width={"100%"}
                      height={"100%"}
                    />
                  </TableCell>
                  <TableCell align="center">{row.productName}</TableCell>
                  <TableCell align="center">{row.brand}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="error"
                      startIcon={<DeleteRoundedIcon />}
                      variant="outlined"
                      onClick={(e) =>{
                        Swal.fire({
                          title: 'آیا مطمئن هستید؟',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          cancelButtonText:"بازگشت",
                          confirmButtonText: 'حذف شود'
                        
                        }).then((result) => {
                          if (result.isConfirmed) {
                            HandleDelete(row)
                            Swal.fire(
                              'حذف شد !',
                              'محصول شما با موفقیت حذف شد ',
                              'success'
                            )
                          }
                        })
                        }}
                    >
                      حذف
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      color="info"
                      startIcon={<EditRoundedIcon />}
                      variant="outlined"
                      onClick={() => {
                        dispatch(editedProduct(row));
                        handleClickOpen();
                      }}
                    >
                      ویرایش
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditModal handleClose={handleClose} str={open} getAllData={getAllData} />
      <AddModal handleClose={handleCloseAddModal} str={openAddModal} getAllData={getAllData} count={count} />
    </>
  );
}
