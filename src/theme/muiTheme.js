import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#58943a",
      main: "#28660a",
      dark: "#003a00",
      contrastText: "#fff"
    },
    secondary: {
      light: "#eab842",
      main: "#b48803",
      dark: "#805b00",
      contrastText: "#000"
    },
    background: {
      paper: "#f5f5f5"
    }
  },
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        color: "#000",
        height: 30,
        fontSize: 14
      }
    },
    MUIDataTableBodyRow: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "#ffffff"
        },
        "&:nth-child(even)": {
          backgroundColor: "#fafafa"
        },
        "&:hover": {
          backgroundColor: "#ebfce1!important",
          cursor: "pointer"
        }
      }
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: 15
      }
    }
  }
});

export default theme;
