import React from 'react'
import Appbar from '../../components/appbar'
import Login from '../../components/loginForm/Login'
import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import theme from "../../styles/theme";
import RTL from '../../rtl';

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
        <RTL>
        <Container
          maxWidth="xl"
          sx={{
            background:"#fff"
          }}
        >
          <Appbar />
          <Login/>
        </Container>
        </RTL>
      </ThemeProvider>
  )
}
