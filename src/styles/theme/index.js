import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#c8b483",
  black: "#000000",
  text: "#d5cbbd",
  white:"#ffffff"
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.black,
    },
  },
  shape:{
    
  },
  direction: "ltr",
  typography: {
    fontFamily:'"Vazirmatn", sans-serif'
  },
  components: {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        // disableElevation: true,
      },
    },
  },
});
export default theme;
