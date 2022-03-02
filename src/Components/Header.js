import React from "react";
import logo from "../image/logo2.png";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    fontFamily: "sans-serif",
    marginBottom: "auto",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 2,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "30vw",
  },
}));

export default function Header() {
  const classes = useStyles();

  let navigate = useNavigate();
  return (
    <AppBar position="static" className={classes.header}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            style={{ height: "40px", width: "40px" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <Typography
            variant="h6"
            style={{
              ...styles.headerTitle,
              fontWeight: "bold",
              marginRight: "50px",
            }}
          >
            Road to Cloud
          </Typography>
        </div>
        <Button
          onClick={() => {
            navigate("/landing");
          }}
          variant="text"
          style={{ textTransform: "none", color: "white" }}
        >
          <Typography variant="subtitle1" style={{ ...styles.headerTitle }}>
            Roadmap
          </Typography>
        </Button>
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Course
        </Typography>
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Lab
        </Typography>
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Tutor
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
