import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Layout from "layout/layout";
import React, { useEffect, useState } from "react";
import { getFilteredData } from "api/api";
import { useTheme } from "@mui/system";
import SingleProductDesktop from "components/products/SingleProductDesktop";
import SingleProduct from "components/products/SingleProducts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BoxSkeleton({ children }) {
  return (
    <div
      style={{
        display: "block",
        lineHeight: 2,
        padding: "2rem ",
        width: 230,
        height: 300,
      }}
    >
      {children}
    </div>
  );
}

export default function MenProducts() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState();

  useEffect(() => {
    getFilteredData("products", "category=مردانه").then((res) => setData(res));
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          margin: "25px  0px",
        }}
      >
        <Box sx={{ flex: "1" }}>
          <img
            src="../images/category/men-cat.jpg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "200px",
          }}
        >
          <Box>
            <Typography variant="h3">مردانه</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "14px" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
      >
        {data ? (
          data.map((product) => (
            <Grid
              item
              key={product.id}
              display="flex"
              xs={2}
              sm={4}
              md={4}
              flexDirection={"column"}
              alignItems="center"
            >
              {matches ? (
                <SingleProduct product={product} matches={matches} />
              ) : (
                <SingleProductDesktop product={product} matches={matches} />
              )}
            </Grid>
          ))
        ) : (
          <Box display="flex"  justifyContent={'center'}>
            <Skeleton wrapper={BoxSkeleton} count={6} height={280} />
            <Skeleton wrapper={BoxSkeleton} count={6} height={280} />
            <Skeleton wrapper={BoxSkeleton} count={6} height={280} />
            <Skeleton wrapper={BoxSkeleton} count={6} height={280} />
            <Skeleton wrapper={BoxSkeleton} count={6} height={280} />
            
          </Box>
        )}
      </Box>
    </Layout>
  );
}
