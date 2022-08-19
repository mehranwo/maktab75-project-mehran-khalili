import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Colors } from "../../styles/theme";
import { ImageListItem, Typography } from "@mui/material";
import { AppbarHeader } from "../../styles/appbar";
import image1 from "../../asset/the-hanger.jpg";
import { useState } from "react";
import {styled} from '@mui/material/styles'
import ListItemLink from "components/ListItemLink";
import { Link } from "react-router-dom";


const sideBarStyle = {
  overflow: "auto",
  display: "flex",
  position: "fixed",
  flex: 1,
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-around",
  borderLeft: "2px solid #cdcdcd9e",
  paddingLeft: "20px",
};

const itemStyle = {
  border: `2px solid ${Colors.primary}`,
  borderRadius: "20px",
}


export default function SideBar() {

  return (
    <Box style={sideBarStyle}>
      <Box sx={{display:"flex" , alignItems:"center"}}>
      <Link to="/">
        <ImageListItem sx={{width:"50px"}}>
          <img src={image1} />
        </ImageListItem>
      </Link>
        <AppbarHeader>کمد</AppbarHeader>
      </Box>
      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: 2, }}>
          <ListItem style={itemStyle} disablePadding>
            <ListItemButton sx={{ borderRadius: "20px" }}>
              <ListItemIcon>
                <WidgetsRoundedIcon sx={{ color: Colors.primary }} />
              </ListItemIcon>
              <ListItemLink to={'/admin/products'} primary={"محصولات"} />
            </ListItemButton>
          </ListItem>
          <ListItem style={itemStyle} disablePadding>
            <ListItemButton sx={{ borderRadius: "20px" }}>
              <ListItemIcon>
                <StorefrontRoundedIcon sx={{ color: Colors.primary }} />
              </ListItemIcon>
              <ListItemLink to={'/admin/stock'} primary={"موجودی و قیمت ها"} />
            </ListItemButton>
          </ListItem>
          <ListItem style={itemStyle} disablePadding>
            <ListItemButton  sx={{ borderRadius: "20px" }}>
              <ListItemIcon>
                <StyleRoundedIcon sx={{ color: Colors.primary }} />
              </ListItemIcon>
              <ListItemLink to={'/admin/orders'} primary={"سفارش ها"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem
            sx={{
              borderRadius: "20px",
              border: "2px solid #e53935",
            }}
            disablePadding
          >
            <ListItemButton onClick={()=>localStorage.clear()} sx={{ borderRadius: "20px" }}>
              <ListItemIcon>
                <PowerSettingsNewIcon sx={{ color: "#e53935" }} />
              </ListItemIcon>
              <ListItemLink to={'/'} primary={"خروج"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
