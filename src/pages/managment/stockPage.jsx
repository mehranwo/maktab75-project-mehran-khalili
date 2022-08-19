import { Box, Button, Container, Grid, ThemeProvider } from "@mui/material";
import { getPaginatedData } from "api/api";
import SideBar from "components/sidebarAdmin";
import HandleTable from "components/table";
import React, { useEffect, useState } from "react";
import RTL from "rtl";
import theme from "styles/theme";

export default function StockPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const changePage = (num)=>{
    setPage(num)
  }
  const getAllData = (str) => {
    getPaginatedData(page, rowsPerPage,str).then((res) => {
      setData(res);
    });
  };
  useEffect(() => {
    getAllData('products');
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
                <HandleTable
                  rows={data.products}
                  getAllData={getAllData}
                  type={"Stock"}
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
}
