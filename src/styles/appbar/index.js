import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

// container
export const AppbarContainer = styled(Box)(()=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:'2px 8px'
}))

// header
export const AppbarHeader = styled(Typography)(()=>({
    padding:"4px",
    fontWeight:700,
    flexGrow:1,
    fontSize:"2em",
    color:Colors.black
}))

export const MyList = styled(List)(({type})=>({
    display: type === 'row'? 'flex' : 'block',
    flexGrow:1,
    justifyContent:'center',
    alignItems:"center"
}))

export const ActionIconsContainerMobile = styled(Box)(()=>({
    display:'flex',
    background:Colors.black,
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
    alignItems:"center",
    zIndex:99,
    borderTop:`1px solid ${Colors.primary}`
}))

export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGrow:0
}))