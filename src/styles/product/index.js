import { Box, Button, IconButton, styled } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation";
import {Colors} from '../theme/index'


export const Product = styled(Box)(({theme})=>({
    marginTop:"40px",
   display:"flex",
   justifyContent: "center",
   alignItems:"center",
   padding:0,
//    flexDirection:"column",
    [theme.breakpoints.up('md')]:{
        position:"relative"
    }
}))


export const ProductImage = styled(Box)(({theme})=>({
    width:"250px",
    background: Colors.primary,
    padding:'2px',
    [theme.breakpoints.down('md')]:{
        width:"80%",
        padding:"24px",
    }
}))


export const ProductActionButton = styled(IconButton)(()=>({
    backgroundColor: Colors.white,
    margin:4,
}))


export const ProductFavButton = styled(ProductActionButton)(({isFav , theme})=>({
    color:isFav ? Colors.primary : "#0a0a0a73",
    [theme.breakpoints.up('md')]:{
        position:"absolute",
        left:0,
        top:10
    }
}))


export const ProductAddToCart = styled(Button)(({show , theme})=>({
    width: '120px',
    fontSize:"12px",
    [theme.breakpoints.up('md')]:{
        position :"absolute",
        bottom: "2%",
        width:"180px",
        padding:"7px 5px",
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.250,0.468 , 0.450, 0.940) both`
    },
    background: Colors.primary,
    opacity: 0.9
}))

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));
  
  export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({ 
    [theme.breakpoints.up("md")]: {
      display: show ? 'visible' : 'none',
      position: "absolute",
      left: 0,
      top: '20%',
      animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
  }));