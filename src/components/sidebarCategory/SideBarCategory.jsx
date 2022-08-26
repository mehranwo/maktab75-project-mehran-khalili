import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getFilteredData } from "api/api";
import { useDispatch } from "react-redux";
import { setProducts } from "redux/actions/productsActions";
export default function SidebarCategory() {
  const [openWomen, setOpenWomen] = React.useState(false);
  const [openMen, setOpenMen] = React.useState(false);
  const dispatch = useDispatch()

  const handleClickWomenCollapse = () => {
    setOpenWomen(!openWomen);
  };
  const handleClickMenCollapse = () => {
    setOpenMen(!openMen);
  };

  const getAllNeedData= (str)=>{
    getFilteredData('products' , str).then((data) => dispatch(setProducts(data)));
  }

  return (
    <List
      sx={{ width: "100%",margin:"20px 0", maxWidth: 270, bgcolor: "transparent" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div"sx={{bgcolor: "transparent"}}  id="nested-list-subheader">
    //       دسته بندی
    //     </ListSubheader>
    //   }
    >
      <ListItemButton>
        <ListItemIcon>
          <StarBorderRoundedIcon fontSize="small" />
        </ListItemIcon>
        <Typography sx={{fontSize:'15px'}} >جدیدترین محصولات</Typography>
      </ListItemButton>
      <Divider/>
      <ListItemButton>
        <ListItemIcon>
          <PercentRoundedIcon fontSize="small" />
        </ListItemIcon>
        <Typography sx={{fontSize:'15px'}} >تخفیفات</Typography>
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={()=>{
        handleClickWomenCollapse()
        
        }}>
        <ListItemIcon>
          <WomanIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="زنانه" />
        {openWomen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openWomen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=زنانه&subcategory=pants')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px"  , display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >شلوار</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=زنانه&subcategory=shirt')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >تیشرت</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=زنانه&subcategory=sneakers')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >کتونی</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=زنانه&subcategory=sweater')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >سوییشرت</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=زنانه&subcategory=jackets')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >ژاکت</Typography>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider/>
      <ListItemButton onClick={handleClickMenCollapse}>
        <ListItemIcon>
          <ManIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="مردانه" />
        {openWomen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=مردانه&subcategory=pants')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px"  , display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >شلوار</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=مردانه&subcategory=shirt')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >تیشرت</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=مردانه&subcategory=sneakers')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >کتونی</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=مردانه&subcategory=sweater')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >سوییشرت</Typography>
          </ListItemButton>
          <ListItemButton sx={{ padding:0, pl: 10 }} onClick={()=>getAllNeedData('gender=مردانه&subcategory=jackets')}>
          <Box sx={{width:"3px" , height:"40px" , background:"black" , marginRight:"20px", display:"flex" , justifyContent:"center", flexDirection:"column"}} >
            <Box sx={{width:"10px" , height:"3px" , background:"black"  , borderRadius:"15px"}}></Box>
          </Box>
          <Typography sx={{fontSize:'15px'}} >ژاکت</Typography>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider/>
      <ListItemButton onClick={()=>getAllNeedData('subcategory=pants')}>
        <ListItemIcon>
          <img src="./images/icons/icons8-trousers-80.png" width={'20px'}/>
        </ListItemIcon>
        <Typography sx={{fontSize:'15px'}} >شلوار</Typography>
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={()=>getAllNeedData('subcategory=sneakers')}>
        <ListItemIcon>
          <img src="./images/icons/icons8-sneakers-50.png" width={'30px'}/>
        </ListItemIcon>
        <Typography sx={{fontSize:'15px'}} >کتونی</Typography>
      </ListItemButton>
      <Divider/>
    </List>
  );
}
