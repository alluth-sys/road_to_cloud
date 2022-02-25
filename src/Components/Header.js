import React from "react";
import logo from "../image/logo2.png";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import CloudIcon from "@mui/icons-material/Cloud";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    fontFamily: "sans-serif",
    marginBottom: "auto",
  },
  toolbar: {
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <img src={logo} style={{ height: "40px", width: "40px" }} />
        <Typography variant="h6" style={styles.headerTitle}>
          Road to Cloud
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  headerTitle: {
    whiteSpace: "nowrap",
    marginLeft: "15px",
  },
};
