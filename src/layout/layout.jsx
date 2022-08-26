import { Container, ThemeProvider } from "@mui/material";
import Appbar from "components/appbar";
import Footer from "components/footer";
import React from "react";
import RTL from "rtl";
import theme from "styles/theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fdff8969",
            overflow:"hidden"
          }}
        >
          <Appbar />
          {children}
        </Container>
        <Footer />
      </RTL>
    </ThemeProvider>
  );
}
