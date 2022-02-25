import React from "react";
import Button from "@mui/material/Button";

import QuizIcon from "@mui/icons-material/Quiz";
import ScienceIcon from "@mui/icons-material/Science";

import { AwsGraph } from "../Graphs/AwsGraph";

import background from "../image/aws_bg.png";

import { AWSURL } from "../Constant/url";

export default function Aws() {
  const handleOpenWindow = () => {
    window.open("https://forms.gle/iRyJqy41xurPpve79");
  };

  const handleOpenLab = () => {
    window.open(AWSURL);
  };

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

// <Button
//       variant="contained"
//       style={{ backgroundColor: "white", color: "black" }}
//       startIcon={<QuizIcon />}
//       onClick={handleOpenWindow}
//     >
//       Quiz
//     </Button>
//     <Button
//       variant="contained"
//       style={{ backgroundColor: "white", color: "black" }}
//       startIcon={<ScienceIcon />}
//       onClick={handleOpenLab}
//     >
//       Lab
//     </Button>
