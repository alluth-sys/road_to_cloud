import React from "react";
import background from "../image/app_bg.png";
import Typography from "@mui/material/Typography";

//amplify
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function LoginPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        display: "flex",
        padding: "80px",
      }}
    >
      <div style={styles.innerLeft}>
        <Typography
          style={{ color: "#FFFFFF", fontWeight: "bold" }}
          variant="h3"
          component="div"
        >
          Begin your Cloud journey from Road to Cloud!
        </Typography>
      </div>
      <div style={styles.innerRight}>
        <Authenticator
          socialProviders={["amazon", "apple", "facebook", "google"]}
        ></Authenticator>
      </div>
    </div>
  );
}

const styles = {
  innerLeft: {
    display: "flex",
    height: "100%",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    //border: "1px solid white",
  },
  innerRight: {
    display: "flex",
    height: "100%",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    //border: "1px solid white",
  },
};
