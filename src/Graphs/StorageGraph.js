import React from "react";
import Graph from "react-graph-vis";
//import { useNavigate } from "react-router-dom";

export const StorageGraph = () => {
  const graph = {
    nodes: [
      {
        id: 0,
        label: "Storage",
        title: "Storage",
        color: "#03DAC6",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 1,
        label: "S3",
        title: "Simple Storage Service",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 2,
        label: "EBS",
        title: "Elastic Block Storage",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 3,
        label: "EFS",
        title: "Elastic File System",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 4,
        label: "RDS",
        title: "RDS",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 5,
        label: "DynamoDB",
        title: "DynamoDB",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
    ],
    edges: [
      { from: 0, to: 1, color: "white", length: 300 },
      { from: 0, to: 2, color: "white", length: 300 },
      { from: 0, to: 3, color: "white", length: 300 },
      { from: 0, to: 4, color: "white", length: 300 },
      { from: 0, to: 5, color: "white", length: 300 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    autoResize: true,
    height: "100%",
    width: "100%",
  };

  //let navigate = useNavigate();

  const events = {
    select: function (event) {
      const { nodes } = event;
      if (nodes[0] === 1) {
        //navigate("/aws");
        console.log(nodes[0]);
      } else if (nodes[0] === 2) {
        //navigate("/azure");
        console.log(nodes[0]);
      } else if (nodes[0] === 3) {
        //navigate("/gcp");
        console.log(nodes[0]);
      } else if (nodes[0] === 4) {
        //navigate("/gcp");
        console.log(nodes[0]);
      }
    },
  };

  return <Graph graph={graph} options={options} events={events} />;
};
