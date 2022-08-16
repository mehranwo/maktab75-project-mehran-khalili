import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Typography } from "@mui/material";

export default function BasicTable({ rows = [], columns = [] }) {
  const englishHeader = Object.keys(columns);
  const persionHeader = Object.values(columns);

  return (
    <TableContainer sx={{ minWidth: 650 }} component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            {persionHeader &&
              persionHeader.map((cell) => (
                <TableCell align="center">{cell}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 
            ? rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {englishHeader.includes("src") && (
                    <TableCell
                      align="center"
                      sx={{ width: "120px", height: "150px" }}
                    >
                      <img
                        src={`http://localhost:3003/files/${row.src[0]}`}
                        width={"100%"}
                        height={"100%"}
                      />
                    </TableCell>
                  )}

                  {englishHeader.includes("name") && (
                    <TableCell align="center">
                      <Typography>{row.name}</Typography>
                    </TableCell>
                  )}
                  {englishHeader.includes("sum") && (
                    <TableCell align="center">
                      <Typography>{row.sum}</Typography>
                    </TableCell>
                  )}
                  {englishHeader.includes("time") && (
                    <TableCell align="center">
                      <Typography>{row.time}</Typography>
                    </TableCell>
                  )}
                  {englishHeader.includes("checkOrder") && (
                    <TableCell align="center">
                      <Button
                        color="info"
                        variant="outlined"
                      >
                        بررسی سفارش
                      </Button>
                    </TableCell>
                  )}
                  {englishHeader.includes("productName") && (
                    <TableCell align="center">
                      <Typography>{row.productName}</Typography>
                    </TableCell>
                  )}
                  {englishHeader.includes("brand") && (
                    <TableCell align="center">{row.brand}</TableCell>
                  )}
                  {englishHeader.includes("price") && (
                    <TableCell align="center">{row.price}</TableCell>
                  )}
                  {englishHeader.includes("stock") && (
                    <TableCell align="center">{row.stock}</TableCell>
                  )}
                  {englishHeader.includes("delete") && (
                    <TableCell align="center">
                      <Button
                        color="error"
                        startIcon={<DeleteRoundedIcon />}
                        variant="outlined"
                      >
                        حذف
                      </Button>
                    </TableCell>
                  )}
                  {englishHeader.includes("edit") && (
                    <TableCell align="center">
                      <Button
                        color="info"
                        startIcon={<EditRoundedIcon />}
                        variant="outlined"
                      >
                        ویرایش
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
