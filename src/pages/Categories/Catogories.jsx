import axios from "axios";
import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { getData, getFilteredData } from "api/api";
import Category from "components/Category/Category";
import Layout from "layout/layout";
import SidebarCategory from "components/sidebarCategory/SideBarCategory";
import Products from "pages/products/Products";
import { useDispatch } from "react-redux";
import { setProducts } from "redux/actions/productsActions";

function BoxSkeleton({ children }) {
  return (
    <div
      style={{
        display: "block",
        lineHeight: 2,
        padding: "0.5rem ",
        width: 200,
        height: 300,
      }}
    >
      {children}
    </div>
  );
}
function BoxSkeleton2({ children }) {
  return (
    <div
      style={{
        display: "block",
        lineHeight: 7,
        padding: "0.5rem ",
        marginBottom: "30px",
        width: 200,
        height: 300,
      }}
    >
      {children}
    </div>
  );
}

export default function Categories() {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("products").then((data) => dispatch(setProducts(data)));
  }, []);
  const englishTypes = [
    "sneakers",
    "jackets",
    "pants",
    "shirt",
    "shoe",
    "sweater",
  ];
  const persionTypes = ["کتانی", "ژاکت", "شلوار", "تیشرت", "کفش", "سوییشرت"];
  useEffect(() => {
    Promise.all([
      getFilteredData("products", "subcategory=sneakers"),
      getFilteredData("products", "subcategory=jackets"),
      getFilteredData("products", "subcategory=pants"),
      getFilteredData("products", "subcategory=shirt"),
      getFilteredData("products", "subcategory=shoe"),
      getFilteredData("products", "subcategory=sweater"),
    ]).then((res) => {
      setData(res);
    });
  }, []);


  return (
    <Layout>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box flex={1}><SidebarCategory/></Box>
        <Box flex={5}><Products /></Box>
        {/* <Box flex={3}>
          {data.length > 0 ? (
            data.map((products, index) => {
              return (
                <Category products={products} type={persionTypes[index]} />
              );
            })
          ) : (
            <Box display="flex">
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                height={"2100px"}
              >
                {persionTypes.map((item) => (
                  <Box>
                    <Typography
                      variant="h5"
                      display={"flex"}
                      alignItems={"center"}
                    >
                      {item}
                      <ArrowBackIosRoundedIcon fontSize="small" />
                    </Typography>
                    <Skeleton wrapper={BoxSkeleton} count={1} height={220} />
                  </Box>
                ))}
              </Box>
              <Box display={"flex"}>
                <Skeleton wrapper={BoxSkeleton2} count={6} height={220} />
                <Skeleton wrapper={BoxSkeleton2} count={6} height={220} />
                <Skeleton wrapper={BoxSkeleton2} count={6} height={220} />
                <Skeleton wrapper={BoxSkeleton2} count={6} height={220} />
                <Skeleton wrapper={BoxSkeleton2} count={6} height={220} />
              </Box>
            </Box>
          )}
        </Box> */}
      </Box>
    </Layout>
  );
}
