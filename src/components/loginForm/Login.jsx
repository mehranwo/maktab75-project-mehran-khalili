import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  FormControl,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Colors } from "../../styles/theme";
import axios from "axios";
import HttpService from "../../services/index";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // toastify
  const notifyFasle = () =>
    toast.error("نام کاربری یا رمز عبور اشتباه است", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyTrue = () =>
    toast.success("خوش آمدید", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const authentication = async (obj) => {
    if (user.password.length > 5) {
      await axios
        .post("http://localhost:3003/auth/login", obj)
        .then((res) => {
          localStorage.setItem("TOKEN", res.data.token);
          setTimeout(() => {
            navigate("/admin/products");
          }, 1000);
          notifyTrue();
        })
        .catch((err) => {
          localStorage.clear();
          notifyFasle();
        });
    } else {
      toast.error("رمز عبور باید بیشتر از 6 رقم داشته باشد", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ffffffd9",
    borderRadius: "20px",
  };
  const avatarStyle = { backgroundColor: Colors.primary };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={1} style={paperStyle}>
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
          <form
            sx={{ width: "100%" }}
            onSubmit={(e) => {
              e.preventDefault();
              authentication(user);
            }}
          >
            <TextField
              label="نام کاربری"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="رمز عبور"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              error={user.password.length > 5 ? false : true}
              helperText={
                user.password.length < 6 && "رمزعبور باید بیش از 6 رقم باشد"
              }
              fullWidth
              required
              sx={{ margin: "1rem 0" }}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              ورود
            </Button>
          </form>
          <FormControlLabel
            dir="ltr"
            label="مرا به خاطرت نگهدار"
            control={<Checkbox name="checkedB" color="secondary" />}
          />
        </Grid>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography>
            <Link href="#" sx={{ textDecoration: "none", color: "#4b00ff" }}>
              فراموشی رمز عبور
            </Link>
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>
              اکانت داری؟
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  marginLeft: "5px",
                  color: "#4b00ff",
                }}
              >
                ثبت نام
              </Link>
            </Typography>
            <Typography onClick={()=>navigate('/')} sx={{color: "#4b00ff",cursor:"pointer"}}>
              صفحه اصلی
            </Typography>
          </Box>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
