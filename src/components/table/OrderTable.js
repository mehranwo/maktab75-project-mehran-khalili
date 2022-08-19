import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import OrderModal from "components/modals/OrderModal";
import {updateData} from "../../api/api"

export default function BasicTable({ rows , getAllData }) {
  const [open, setOpen] = React.useState(false);
  const [order , setOrder ] = React.useState([])

  const changeStatus = (str) =>{
    setOrder({...order , status: `${str}`})
  }

  const saveChange = async ()=>{
    await updateData('orders', order.id , order)
    await getAllData('orders')

  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">نام کاربر</TableCell>
              <TableCell align="center">مجموع</TableCell>
              <TableCell align="center">زمان</TableCell>
              <TableCell align="center">بررسی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.sum}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="info"
                      variant="outlined"
                      onClick={() => {
                        handleClickOpen();
                        setOrder(row)
                      }}
                    >
                      بررسی سفارش
                    </Button>
                  </TableCell>
                  
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <OrderModal handleClose={handleClose} str={open} order={order} changeStatus={changeStatus} saveChange={saveChange} />
    </>
  );
}
