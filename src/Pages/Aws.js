import React from "react";
import background from "../image/aws_bg.png";

export default function Aws() {
  return <div style={styles.container}>Aws</div>;
}

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    height: "100vh",
  },
};
