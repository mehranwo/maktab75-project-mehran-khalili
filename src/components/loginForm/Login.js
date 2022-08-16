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
  const notifyFasle = () => toast.error("نام کاربری یا رمز عبور اشتباه است" , {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifyTrue = () => toast.success("خوش آمدید" , {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const authentication = async (obj) => {
    const response = await axios.post("http://localhost:3003/auth/login", obj)
      .then((res)=>{
        console.log(res.data);
        localStorage.setItem("TOKEN", res.data.token);
        setTimeout(()=>{
          navigate("/admin");
        },1000)
        notifyTrue()
      })
      .catch((err)=>{
        localStorage.clear();
        notifyFasle()
      })
  };

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
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={() => {
              authentication(user);
            }}
          >
            ورود
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
