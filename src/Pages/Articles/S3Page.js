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
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

//Axios
import axios from "axios";

export default function S3Page() {
  const [show, setShow] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const [titleResponse, setTitleResponse] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpenWindow = () => {
    window.open("https://forms.gle/iRyJqy41xurPpve79");
  };

  const handleOpenLab = () => {
    const message = "testing123";

    axios({
      method: "POST",
      url: `https://mu6us25h47.execute-api.us-east-1.amazonaws.com/test/send-message?message=${message}&topic=arn:aws:sns:us-east-1:478977890696:Test`,
    }).finally(() => {
      setTimeout(() => {
        alert("部署完成");
      }, 2000);
    });
  };

  const handleGetActivities = () => {
    setIsLoading(true);
    axios
      .get("https://gkcoxo27w3.execute-api.us-west-2.amazonaws.com/dev/crawal")
      .then((res) => {
        setTitleResponse(JSON.parse(res.data.body)[0]);
        setResponse(JSON.parse(res.data.body)[1]);
        setIsLoading(false);
        handleShow();
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <div style={styles.container}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Available Activites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {response ? (
            response.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ fontWeight: "bold" }}>
                    {titleResponse[index]}
                  </div>
                  <div>{item}</div>
                  <Spacer height={"20px"} />
                </div>
              );
            })
          ) : (
            <div>No Time Available</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <img src={banner} alt="banner" style={styles.imageStyle} /> */}
      <Spacer height={"30px"} />
      <div style={styles.titleStyle}>
        <S3Icon size={60} />
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold", color: "white" }}
        >
          Simple Storage Service
        </Typography>
      </div>
      <Spacer height={"30px"} />
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{ fontWeight: "bold", color: "white" }}
      >
        Introduction
      </Typography>
      <div style={{ color: "white" }}>
        <ul>
          <li>Amazon S3 — Object storage, 可儲存多個檔案類型 (全託管服務)</li>
          <li>
            📌 Use case → Static Website、Endpoints for Download、Backup
            Tool、Store Log (to analysis)、Data Lake (因為接受任何檔案格式)
          </li>
        </ul>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Data consistency model for S3
        </Typography>
        <ul>
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
          <li>Strong read-after-write consistency model → 追求 Consistency</li>
          <li>Eventual Consistency → 追求 Availability</li>
          <li>Object Storage → 要改寫都是直接整個檔案覆蓋或刪除</li>
          <li>S3FS/Goofy</li>
          <ul>
            <li>Third party (Stability?)</li>
            <li>
              Mount S3 on EC2 (S3 is object storage, still not the best with
              bulk)
            </li>
          </ul>
        </ul>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Security
        </Typography>
        <ul>
          <li>Bucket — Regional 服務, must be universal namespace</li>
          <ul>
            <li>以 Bucket 為單位</li>
            <li>Bucket policy → Resource, Actions, Effect, Principal</li>
            <ul>
              <li>分享指定誰可以看到此份資源</li>
              <li>Default: Private；Public；Access Policy</li>
            </ul>
          </ul>
        </ul>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Durability
        </Typography>
        <ul>
          <li>耐用度 → 東西還在不在?</li>
          <li>Using Version control</li>
        </ul>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          High-Avability
        </Typography>
        <ul>
          <li>可用度 → 能不能拿的到?</li>
          <li>Storage in different AZs (At least 3)</li>
        </ul>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Object Storage
        </Typography>
        <ul>
          <li>Object could be file, video, image... etc</li>
          <li>HTTP 200 code if the upload was successful</li>
          <li>Single Size limit: 5TB for each object</li>
          <li>Object key is the unique identifier for an object in bucket</li>
          <li>Object URL:</li>
          <ul>
            <li>https://Bucket Name.s3.amazonaws.com/Object Key</li>
            <ul>
              <li>Bucket Name must be unique</li>
              <li>Object Key can be same in different Bucket</li>
            </ul>
          </ul>
          <li>Object Keys in S3 are partitioned by prefix</li>
          <ul>
            <li>Bulk storage:</li>
            <ul>
              <li>
                Storage that is not used for high-speed execution. May refer to
                auxiliary memory, tape or disk. The term comes from the
                mainframe world.
              </li>
              <li>磁碟應盤圓周有內有外，故資料讀取速度不一樣</li>
            </ul>
            <li>Prefix</li>
            <ul>
              <li>Hash 值儲存</li>
              <li>解決 Bulk storage 讀取速度不一的問題</li>
            </ul>
          </ul>
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
        {!isLoading ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<OnlinePredictionIcon />}
            onClick={handleGetActivities}
          >
            Activites
          </Button>
        ) : (
          <ClipLoader size={20} color="white" />
        )}
      </div>

      <Spacer height={"100px"} />
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    padding: "50px",
    paddingLeft: "150px",
    backgroundColor: "black",
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
