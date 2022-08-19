import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Input } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import axios from "axios";
import { updateData } from "../../api/api";
import { Colors } from "styles/theme";

export default function StockTable({ rows, getAllData }) {
  const [codeChangedPrice, setCodeChangedPrice] = useState([]);
  const [codeChangedStock, setCodeChangedStock] = useState([]);

  const saveEditedData = () => {
    const hash = new Map();
    codeChangedPrice.concat(codeChangedStock).forEach(function (obj) {
      hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj));
    });
    const codes = Array.from(hash.values());
    
    
    codes.map(async (item)=>{
      await updateData('products' , item.id , item)
    })
    getAllData('products')
  };
  return (
    <>
      <Button
        color="info"
        variant="outlined"
        disabled={
          codeChangedPrice.length > 0 || codeChangedStock.length > 0
            ? false
            : true
        }
        onClick={() => saveEditedData()}
      >
        ذخیره
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">نام</TableCell>
              <TableCell align="center">موجودی</TableCell>
              <TableCell align="center">قیمت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Input
                      defaultValue={row.productName}
                      readOnly
                      sx={{ "&::before": { border: "none" } }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type={"number"}
                      defaultValue={row.stock}
                      onDoubleClick={(e) => {
                        e.target.readOnly = false;
                        e.target.style.backgroundColor = Colors.primary;
                      }}
                      readOnly
                      onBlur={(e) => {
                        e.target.readOnly = true;

                        if (e.target.value !== e.target.defaultValue) {
                          e.target.style.backgroundColor = `${Colors.primary}`;
                          codeChangedStock.length > 0
                            ? codeChangedStock.map((item) => {
                                if (item.id !== row.id) {
                                  setCodeChangedStock([
                                    ...codeChangedStock,
                                    {
                                      id: row.id,
                                      stock: e.target.value,
                                    },
                                  ]);
                                }
                              })
                            : setCodeChangedStock([
                                ...codeChangedStock,
                                {
                                  id: row.id,
                                  stock: e.target.value,
                                },
                              ]);
                        } else {
                          e.target.style.backgroundColor = "transparent";
                          const filterData = codeChangedStock.filter(
                            (item) => item.id !== row.id
                          );
                          setCodeChangedStock(filterData);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          e.target.readOnly = true;
                          e.target.value = e.target.defaultValue;
                          e.target.style.backgroundColor = "transparent";
                        }
                      }}
                      sx={{ "&::before": { border: "none" } }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type={"number"}
                      defaultValue={row.price}
                      onDoubleClick={(e) => {
                        e.target.readOnly = false;
                        e.target.style.backgroundColor = Colors.primary;
                      }}
                      readOnly
                      onBlur={(e) => {
                        e.target.readOnly = true;

                        if (e.target.value !== e.target.defaultValue) {
                          e.target.style.backgroundColor = `${Colors.primary}`;
                          codeChangedPrice.length > 0
                            ? codeChangedPrice.map((item) => {
                                if (item.id !== row.id) {
                                  setCodeChangedPrice([
                                    ...codeChangedPrice,
                                    { id: row.id, price: e.target.value },
                                  ]);
                                }
                              })
                            : setCodeChangedPrice([
                                ...codeChangedPrice,
                                { id: row.id, price: e.target.value },
                              ]);
                        } else {
                          e.target.style.backgroundColor = "transparent";
                          const filterData = codeChangedPrice.filter(
                            (item) => item.id !== row.id
                          );
                          setCodeChangedPrice(filterData);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          e.target.readOnly = true;
                          e.target.value = e.target.defaultValue;
                          e.target.style.backgroundColor = "transparent";
                        }
                      }}
                      sx={{ "&::before": { border: "none" } }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
