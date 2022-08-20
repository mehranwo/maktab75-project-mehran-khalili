import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData, getFilteredData } from "api/api";
import Layout from "layout/layout";
//swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperSlide } from "swiper/react";
import SwiperProductImage from "components/swiperImage";
import Light from "components/test/test";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}


const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  // maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ onClose }) {
  const { id } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [product, setProduct] = useState();
  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    getData(`products/${id}`).then((res) => setProduct(res));
  }, [id]);

  return (
    <Layout>
      {product && (
        <>
          <Box
            display={"flex"}
            flexDirection={matches ? "column" : "row"}
            flex='1'
            justifyContent={'space-between'}
          >
            <ProductDetailInfoWrapper flex='1'>
              <Typography variant="subtitle">
                Availability: 5 in stock
              </Typography>
              <Typography sx={{ lineHeight: 2 }} variant="h4">
                {product.productName}
              </Typography>
              <Typography variant="body">{product.description}</Typography>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <IncDec />
                <Button variant="contained">Add to Cart</Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ mt: 4, color: Colors.light }}
              >
                <FavoriteIcon sx={{ mr: 2 }} />
                Add to wishlist
              </Box>
              <Box
                sx={{
                  mt: 4,
                  color: Colors.dove_gray,
                }}
              >
                <FacebookIcon />
                <TwitterIcon sx={{ pl: 2 }} />
                <InstagramIcon sx={{ pl: 2 }} />
              </Box>
            </ProductDetailInfoWrapper>
            <Product sx={{ mr: 4 }} flex='1'>
              <SwiperProductImage src={product.src}/>
            </Product>
          </Box>
        </>
      )}
    </Layout>
  );
}
