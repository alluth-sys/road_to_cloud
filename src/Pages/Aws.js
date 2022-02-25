import React from "react";

import { AwsGraph } from "../Graphs/AwsGraph";
import background from "../image/aws_bg.png";

export default function Aws() {
  return (
    <div style={styles.container}>
      <AwsGraph />
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};
