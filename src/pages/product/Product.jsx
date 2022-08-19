import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import { selectedProduct } from "../../redux/actions/productsActions";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductShow({matches}) {

  const [showOptions, setShowOptions] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product)
  console.log(product);



  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductImage
          sx={{
            "&:hover img": {
              content: `url(http://localhost:3003/files/${product.src[1]})`,
            },
          }}
        >
          <img
            src={`http://localhost:3003/files/${product.src[0]}`}
            width={"100%"}
            height={"100%"}
          />
        </ProductImage>
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart show={showOptions} variant="contained">
            اضافه شدن به سبد خرید
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton >
              <Tooltip placement="left" title="تمام صفحه">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    </>
  );
}
