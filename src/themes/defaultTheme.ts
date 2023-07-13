import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: red[500],
  },
  typography: {
    h1: {
      fontSize: "2rem",
      textAlign: "center",
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.6rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.1rem",
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default theme;