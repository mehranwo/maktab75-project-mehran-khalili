import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "../../styles/theme";
import Appbar from "../../components/appbar";
import { BrowserRouter } from "react-router-dom";
import HandleRouter from "../../Routes/HandleRouter";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";
import { ManagmentProducts } from "../../pages/managment";
import RTL from "../../rtl";
import Products from "../../components/products";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Appbar />
          <Banner />
          <Promotions />
          <Products/>
        </Container>
      </RTL>
    </ThemeProvider>
  );
};

export default Home;
