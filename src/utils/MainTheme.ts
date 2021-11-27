import { createTheme } from "@mui/material";
import { blue, blueGrey, lightGreen } from "@mui/material/colors";

const MainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: lightGreen,
    secondary: {
      main: blue[200],
    },
  },
});

export default MainTheme;
