import { Box } from "@mui/material";
import theme, { Colors } from "../theme";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme, src }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  height: "600px",
  padding: "0px 0px",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  [theme.breakpoints.down("md")]:{
    backgroundSize: "contain",
    height: "350px",
    width:"370px"
  },
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "contain",
    height: "200px",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height:"600px",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "400px",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
  color:"#ffffff",
  [theme.breakpoints.down("sm")]:{
    padding: "15px",
    textAlign:"left"
  }
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    textAlign:"left"
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
