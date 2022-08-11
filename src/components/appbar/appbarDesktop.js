import { ImageListItem, ListItemButton, ListItemIcon} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import * as React from 'react';
import Actions from "./actions";
import image1 from "../../asset/the-hanger.jpg"
import ListItemLink from "../ListItemLink";
import { Link } from "react-router-dom";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <ImageListItem>
        <img src={image1} />
      </ImageListItem>
      <AppbarHeader>کمد</AppbarHeader>
      <MyList type="row">
        <Link to="/">صفحه اصلی</Link>
        <ListItemLink to="/Home" primary="صفحه اصلی"  />
        <ListItemLink to="/" primary="دسته بندی ها" />
        <ListItemLink to="/" primary="محصولات" />
        <ListItemLink to="/" primary="ارتباط با ما" />
        <ListItemButton sx={{ flexGrow:0 , display:"flex",justifyContent:"center" }}>
          <ListItemIcon sx={{ display:"flex",justifyContent:"center" }}>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches}/>
    </AppbarContainer>
  );
}







