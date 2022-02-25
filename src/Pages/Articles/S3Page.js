import React from "react";
import Typography from "@mui/material/Typography";
//import AWSIcon from "react-aws-icons/dist/aws/logo/AWS";
import S3Icon from "react-aws-icons/dist/aws/logo/S3";
import banner from "../../image/s3_banner.png";
import Spacer from "react-spacer";
import Button from "@mui/material/Button";

//Icon
import QuizIcon from "@mui/icons-material/Quiz";
import ScienceIcon from "@mui/icons-material/Science";

//URL
import { AWSURL } from "../../Constant/url";

export default function S3Page() {
  const handleOpenWindow = () => {
    window.open("https://forms.gle/iRyJqy41xurPpve79");
  };

  const handleOpenLab = () => {
    window.open(AWSURL);
  };

  return (
    <div style={styles.container}>
      <img src={banner} alt="banner" style={styles.imageStyle} />
      <Spacer height={"30px"} />
      <div style={styles.titleStyle}>
        <S3Icon size={100} />
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          style={{ fontFamily: "monospace" }}
        >
          S3
        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom
        style={{ fontFamily: "monospace", fontWeight: "bold" }}
      >
        Introduction
      </Typography>
      <div>
        <ul>
          <li>Amazon S3 — Object storage, 可儲存多個檔案類型 (全託管服務)</li>
          <li>
            📌 Use case → Static Website、Endpoints for Download、Backup
            Tool、Store Log (to analysis)、Data Lake (因為接受任何檔案格式)
          </li>
        </ul>

        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Data consistency model for S3
        </Typography>

        <li>CAP 定理</li>
        <ul>
          <li>CAP Thm = Brewer’s thm</li>
          <li>分散式儲存系統會發生的問題，不可以能同時滿足以下三點</li>
          <ol>
            <li>一致性 (Consistency)</li>
            <li>可用性 (Availability)</li>
            <li>分區容錯姓 (Partition tolerance)</li>
          </ol>
        </ul>
      </div>
      <Spacer height={"50px"} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          startIcon={<ScienceIcon />}
          onClick={handleOpenLab}
        >
          Lab
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          startIcon={<QuizIcon />}
          onClick={handleOpenWindow}
        >
          Quiz
        </Button>
      </div>
      <Spacer height={"500px"} />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    padding: "50px",
  },
  titleStyle: {
    display: "flex",
  },
  imageStyle: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
  },
};
