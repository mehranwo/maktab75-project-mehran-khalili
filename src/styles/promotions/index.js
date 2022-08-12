import { Box, Typography } from "@mui/material";
import {styled} from "@mui/material/styles"
import { fontSize } from "@mui/system";
import { Colors } from "../theme";


export const PromotionsContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        padding:"0px 40px"
    },
    marginTop:"15px",
    display:'flex',
    justifyContent:"center",
    alignContent:"center",
    padding:'0px 20px',
    overflow:'hidden',
    background:Colors.primary
}))

export const MessageText = styled(Typography)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        fontSize:"2.5rem",
    },
    color:Colors.white,
    fontSize:"1.5rem"
})) 