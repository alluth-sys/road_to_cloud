import React from "react";
import { StorageGraph } from "../Graphs/StorageGraph";
import background from "../image/aws_bg.png";

export default function StoragePage() {
  return (
    <div style={styles.container}>
      <StorageGraph />
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
