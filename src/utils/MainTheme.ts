import { createTheme } from "@mui/material";
import { blue, lightGreen } from "@mui/material/colors";

const MainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: lightGreen,
    secondary: blue,
  },
});

export default MainTheme;
