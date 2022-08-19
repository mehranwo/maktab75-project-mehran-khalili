import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { getData } from "../../api/api";
import SingleProduct from "./SingleProducts";
import SingleProductDesktop from "./SingleProductDesktop";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
} from "../../redux/actions/productsActions";


export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getData('products').then(data=>dispatch(setProducts(data)));
  }, []);

  const renderProducts =
    products &&
    products.map((product) => (
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
    ));

  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}