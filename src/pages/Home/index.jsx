import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "../../styles/theme";
import Appbar from "../../components/appbar";
import { BrowserRouter } from "react-router-dom";
import HandleRouter from "../../Routes/HandleRouter";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";

import RTL from "../../rtl";
import Products from "../../components/products";
import Footer from "../../components/footer";
import CategoryHome from "components/Category/CategoryHome";
import Layout from "layout/layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Promotions />
      <CategoryHome />
    </Layout>
  );
};

export default Home;
