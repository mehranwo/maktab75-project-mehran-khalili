import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../styles/appbar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import ListItemLink from "../ListItemLink";

export default function Actions({matches}) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:matches && Colors.primary
            }}
          >
            <ShoppingCardIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
         to={"/login"}
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:matches && Colors.primary
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <ListItemLink to="/login" primary="" icon={<PersonIcon />}  /> */}
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:matches && Colors.primary
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
