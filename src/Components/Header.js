import React from "react";
import logo from "../image/logo2.png";
import Button from "@mui/material/Button";
import Spacer from "react-spacer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

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
    width: "100vw",
  },
}));

export default function Header({ signOut, user }) {
  const [username, setUsername] = React.useState("");
  const classes = useStyles();

  React.useEffect(() => {
    if (user) {
      setUsername(user.attributes.email.split("@")[0]);
    }
  }, [user]);

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
          <Spacer width={"20px"} />
        </Button>
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Course
        </Typography>
        <Spacer width={"20px"} />
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Lab
        </Typography>
        <Spacer width={"20px"} />
        <Typography variant="subtitle1" style={styles.headerTitle}>
          Tutor
        </Typography>
        <div
          style={{
            position: "absolute",
            marginRight: 0,
            right: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">Hi, {username}</Typography>
          <IconButton size="large" onClick={signOut} sx={{ color: "white" }}>
            <LogoutIcon fontSize="inherit" />
          </IconButton>
        </div>
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
