import { ImageListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import Actions from "./actions";
import image1 from "../../asset/the-hanger.jpg";
import ListItemLink from "../ListItemLink";
import { Link } from "react-router-dom";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <Link to="/">
        <ImageListItem>
          <img src={image1} />
        </ImageListItem>
      </Link>
      <AppbarHeader>کمد</AppbarHeader>
      <MyList type="row">
        <ListItemLink to="/" primary="صفحه اصلی" />
        <ListItemLink to="/categories" primary="دسته بندی ها" />
        {/* <ListItemLink to="/products" primary="محصولات" /> */}
        <ListItemLink to="/contact" primary="ارتباط با ما" />
        <ListItemButton
          sx={{ flexGrow: 0, display: "flex", justifyContent: "center" }}
        >
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
