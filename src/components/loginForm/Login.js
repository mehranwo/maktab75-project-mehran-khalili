import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Colors } from "../../styles/theme";
import ListItemLink from "../ListItemLink";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const avatarStyle = { backgroundColor: Colors.primary };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" gap={3}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4">ورود</Typography>
        </Grid>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <TextField label="نام کاربری" fullWidth required />
          <TextField label="رمز عبور" type="password" fullWidth required />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            <ListItemLink primary="ورود" to="/admin" />
          </Button>

          <FormControlLabel
            dir="ltr"
            label="مرا به خاطرت نگهدار"
            control={<Checkbox name="checkedB" color="secondary" />}
          />
        </Grid>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography>
            <Link href="#" sx={{ textDecoration: "none" }}>
              فراموشی رمز عبور
            </Link>
          </Typography>
          <Typography>
            {" "}
            اکانت داری؟
            <Link href="#" sx={{ textDecoration: "none" }}>
              ثبت نام
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
