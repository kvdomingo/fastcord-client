import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ['"Noto Sans"', '"Segoe UI Variable"', '"Segoe UI"', "sans-serif"].join(", "),
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
});

export default responsiveFontSizes(theme);
