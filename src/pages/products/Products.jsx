import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import { getData } from "api/api";
import SingleProduct from "components/products/SingleProducts";
import SingleProductDesktop from "components/products/SingleProductDesktop";
import Layout from "layout/layout";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();



  const renderProducts =
  
    products &&
    products.map((product) => (
      <Grid
        item
        key={product.id}
        display="flex"
        // xs={2}
        // sm={4}
        // md={4}
        flexDirection={"column"}
        alignItems="center"
      >
        {matches ? (
          <SingleProduct product={product} matches={matches} />
        ) : (
          <SingleProductDesktop product={product} matches={matches} />
        )}
      </Grid>
    ));

  return (
    <Box>
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
            src={`http://localhost:3003/files/${products[0]?.src[0]}`}
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
            <Typography variant="h3">{products[0]?.productName}</Typography>
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
      <Grid
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
      </Box>
  );
}
