import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fffffff",
    },
    secondary: {
      main: "#2E6EB1",
    },
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        margin: 0,
        padding: "0.5em 24px",
        flex: "1",
        textAlign: "center",
        backgroundColor: 'white',
        color: '#5AA9E6',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "350px",
        backgroundImage: "linear-gradient(#377FC0, #379FC0)",
      }
    },
    MuiAvatar: {
      root: {
        width: "inherit",
        height: "inherit",
      },
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
      containedPrimary: {
        backgroundColor: "#4195D0",
        color: 'white',
        '&:hover': {
          backgroundColor: '#81BAE6',
        }
      },
      containedSecondary: {
        color: "#2E6EB1",
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: '#bce2ff',
        }
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiCard: {
      root: {
        backgroundColor: "#4195D0",
      }
    }
  },
});

export default theme;
