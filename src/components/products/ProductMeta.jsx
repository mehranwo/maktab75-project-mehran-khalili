import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";
export default function ProductMeta({ product, matches }) {
    return (
      <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {product.productName}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          {product.price} تومان
        </Typography>
      </ProductMetaWrapper>
    );
}