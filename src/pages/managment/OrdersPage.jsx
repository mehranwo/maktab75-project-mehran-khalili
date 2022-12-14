import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFilteredData, getPaginatedData } from "../../api/api";
import Appbar from "../../components/appbar";
import RTL from "../../rtl";
import { ThemeProvider } from "@mui/system";
import { Box, Button, Container } from "@mui/material";
import theme from "../../styles/theme";
import SideBar from "../../components/sidebarAdmin";
import HandleTable from "../../components/table";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

export const OrdersPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [filter, setFilter] = useState("");

  

  const getAllData = (str) => {
    getPaginatedData(page, rowsPerPage, str).then((res) => {
      setData(res);
    });
  };

  const getAllfilterData = (str) => {
    getFilteredData("orders", str).then((res) => {
      setData(res);
    });
  };

  const changePage = (num) => {
    setPage(num);
  };

  const changeFilter = (str) => {
    if (str != filter) {
      setFilter(str);
      getAllfilterData(str);
    }
  };

  useEffect(() => {
    getAllData("orders");
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <SideBar />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={8}>
                <Button
                  onClick={(e) => {
                    changeFilter("status=true");
                  }}
                  variant="contained"
                >
                  ارسال شده است{" "}
                </Button>
                <Button
                  onClick={(e) => {
                    changeFilter("status=false");
                  }}
                  variant="contained"
                >
                  در حال انتظار
                </Button>
                <HandleTable
                  rows={data.products}
                  getAllData={getAllData}
                  type={"Order"}
                />
                <Box sx={{ marginTop: "10px", display: "flex", gap: 1 }}>
                  <Button
                    onClick={(e) => {
                      changePage(e.target.textContent);
                    }}
                    variant="contained"
                  >
                    1
                  </Button>
                  <Button
                    onClick={(e) => changePage(e.target.textContent)}
                    variant="contained"
                  >
                    2
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </RTL>
    </ThemeProvider>
  );
};
