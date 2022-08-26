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
  Input,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../ui/incdec";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData, getFilteredData } from "api/api";
import Layout from "layout/layout";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
//swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperSlide } from "swiper/react";
import SwiperProductImage from "components/swiperImage";
import Light from "components/test/test";
import { selectedBuyProduct, selectedProduct } from "redux/actions/productsActions";
import { toast, ToastContainer } from "react-toastify";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}


const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  fontFamily:'"Vazirmatn", sans-serif',
  // maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ onClose }) {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const theme = useTheme();
  const dispatch = useDispatch()
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [product, setProduct] = useState();
  const [similarProduct , setSimilarProduct] = useState()
  const localCart = localStorage.getItem("cart");

  //toastify
  const notifyFasle = () => toast.error("اتمام موجودی " , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const reduxCart = useSelector((state) => state.buyProduct);

  const cart = JSON.parse(localCart) || reduxCart;
  //swiper


  useEffect(() => {
    getData(`products/${id}`)
      .then((res) => {
        setProduct(res)
        dispatch(selectedProduct(res));
      })
    
      if (cart.length > 0) {
        const addedProduct = cart.find((item) => +item.id === +id);
        console.log(addedProduct);
        addedProduct !== undefined ? setCount(addedProduct.inCart) : setCount(1);
      } else {
        setCount(1);
      }
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
              <Typography sx={{ lineHeight: 2 }} variant="h3">
                {product?.productName}
              </Typography>
              <List>
                <ListItem sx={{display:"flex" , alignItems:"center"}}>
                  <Typography sx={{fontSize:"20px" , fontWeight:"bold" , marginRight:"2px"}} > برند :</Typography>
                  <Typography sx={{fontSize:"18px"}} >{product?.brand}</Typography>
                </ListItem>
                <ListItem sx={{display:"flex" , alignItems:"center"}}>
                  <Typography sx={{fontSize:"20px" , fontWeight:"bold" , marginRight:"2px"}} > نوع :</Typography>
                  <Typography sx={{fontSize:"18px"}} >{product?.gender}</Typography>
                </ListItem>
              </List>
              <Typography variant="body" >{product?.description}</Typography>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                {cart.length > 0 &&
                cart.find((item) => +item.id === +product.id) ? (
                  <Box >
                    <Box>
                      <Typography variant="h5">تعداد</Typography>
                    </Box>
                    <Box display={'flex'} >
                    <Button
                      onClick={() => {
                        const addedProduct = cart.find(
                          (item) => +item.id === +product.id
                        );

                        if (addedProduct.inCart > 1) {
                          let editedCart = [];
                          cart.forEach((item) => {
                            if (+item.id !== +addedProduct.id) {
                              editedCart.push(item);
                            } else {
                              editedCart.push({
                                ...item,
                                inCart: item.inCart - 1,
                                stock: item.stock + 1,
                              });
                            }
                          });
                          setCount(count - 1);
                          dispatch(selectedBuyProduct(editedCart));
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(editedCart)
                          );
                        } else if (addedProduct.inCart === 1) {
                          let filteredCart = cart.filter(
                            (item) => +item.id !== +product.id
                          );
                          dispatch(selectedBuyProduct(filteredCart));
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(filteredCart)
                          );
                        }
                      }}
                    >
                      <RemoveRoundedIcon/>
                    </Button>
                    <Box width={"30px"}>
                      <Input
                        value={count}
                        readOnly
                      />
                    </Box>
                    <Button
                      onClick={() => {
                        const addedProduct = cart.find(
                          (item) => +item.id === +product.id
                        );

                        if (addedProduct.stock > 0) {
                          let editedCart = [];
                          cart.forEach((item) => {
                            if (+item.id !== +addedProduct.id) {
                              editedCart.push(item);
                            } else {
                              editedCart.push({
                                ...item,
                                inCart: item.inCart + 1,
                                stock: item.stock - 1,
                              });
                            }
                          });
                          setCount(count + 1);
                          dispatch(selectedBuyProduct(editedCart));
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(editedCart)
                          );
                        } else {
                          notifyFasle()                        }
                      }}
                    >
                      <AddRoundedIcon/>
                    </Button>
                    </Box>
                  </Box>
                ) : (
                  
                  <Button
                  variant="contained"
                    onClick={() => {
                      if (cart.length > 0) {
                        product?.stock > 0 &&
                          dispatch(
                            selectedBuyProduct([
                              ...cart,
                              {
                                id: product.id,
                                title: product.title,
                                gender: product.gender,
                                category: product.category,
                                model: product.model,
                                brand: product.brand,
                                price: product.price,
                                image: product.src[0],
                                stock: product.stock - count,
                                inCart: count,
                              },
                            ])
                          );
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([
                            ...cart,
                            {
                              id: product.id,
                              title: product.title,
                              gender: product.gender,
                              category: product.category,
                              model: product.model,
                              brand: product.brand,
                              price: product.price,
                              image: product.src[0],
                              stock: product.stock - count,
                              inCart: count,
                            },
                          ])
                        );
                      } else {
                        if (product.stock > 0) {
                          dispatch(
                            selectedBuyProduct([
                              {
                                id: product.id,
                                title: product.title,
                                gender: product.gender,
                                category: product.category,
                                model: product.model,
                                brand: product.brand,
                                price: product.price,
                                image: product.src[0],
                                stock: product.stock - count,
                                inCart: count,
                              },
                            ])
                          );
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([
                              {
                                id: product.id,
                                title: product.title,
                                gender: product.gender,
                                category: product.category,
                                model: product.model,
                                brand: product.brand,
                                price: product.price,
                                image: product.src[0],
                                stock: product.stock - count,
                                inCart: count,
                              },
                            ])
                          );
                        } else {
                          toast.error("سقف موجودی کالا");
                        }
                      }
                    }}
                  >
                    افزودن به سبد خرید
                    </Button>
                )}
                {product.stock > 0 ? (
                  <Typography variant="h6" fontWeight={'semibold'}>{product.price} تومان</Typography>
                ) : (
                  <Typography variant="h2" fontWeight={'semibold'} >
                    نا موجود
                  </Typography>
                )}
              </Box>
              <Button
                display="flex"
                alignItems="center"
                sx={{ mt: 4, color: Colors.light }}

              >
                <FavoriteIcon sx={{ mr: 2 }} />
                اضافه کردن به علاقه مندی ها 
              </Button>
            </ProductDetailInfoWrapper>
            <Product sx={{ mr: 4 }} flex='1'>
              <SwiperProductImage src={product?.src}/>
            </Product>
          </Box>
        </>
      )}
      <ToastContainer
            position="top-bottom"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </Layout>
  );
}
