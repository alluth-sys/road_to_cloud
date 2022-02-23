import React from "react";
import background from "../image/app_bg.png";
import { MyCustomGraph } from "../MyCustomGraph";

export default function Landing() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
      }}
    >
      <MyCustomGraph />
    </div>
  );
}
