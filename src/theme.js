import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#5AA9E6",
    },
    secondary: {
      main: "#9FCE4E",
    },
    background: {
      paper: "#453F3C",
      default: "453F3C",
    },
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        margin: 0,
        padding: "0px 24px",
        flex: "1",
        textAlign: "center",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "350px",
      }
    },
    MuiButton: {
      root: {
        borderRadius: "2em",
      },
      outlined: {
        borderWidth: "2px",
      },
      startIcon: {
        height: "0.9em",
        width: "0.9em",
        marginTop: "-0.1em",
      },
    },
  },
});

export default theme;
