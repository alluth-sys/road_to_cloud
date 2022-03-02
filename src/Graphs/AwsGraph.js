import React from "react";
import Graph from "react-graph-vis";
import { useNavigate } from "react-router-dom";

export const AwsGraph = () => {
  const graph = {
    nodes: [
      {
        id: 0,
        label: "AWS",
        title: "Amazon Web Services",
        color: "#F08843",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 1,
        label: "Connection",
        title: "Connection",
        color: "#F4A369",
        shape: "circle",
        margin: 20,
        font: {
          color: "black",
        },
      },
      {
        id: 2,
        label: "Serverless",
        title: "Serverless",
        color: "#F4A369",
        shape: "circle",
        margin: 20,
        font: {
          color: "black",
        },
      },
      {
        id: 3,
        label: "Storage",
        title: "Storage",
        color: "#F4A369",
        shape: "circle",
        margin: 20,
        font: {
          color: "black",
        },
      },
      {
        id: 4,
        label: "Security",
        title: "Security",
        color: "#F4A369",
        shape: "circle",
        margin: 20,
        font: {
          color: "black",
        },
      },
    ],
    edges: [
      { from: 0, to: 1, color: "white", length: 300 },
      { from: 0, to: 2, color: "white", length: 300 },
      { from: 0, to: 3, color: "white", length: 300 },
      { from: 0, to: 4, color: "white", length: 300 },
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

  let navigate = useNavigate();

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
        navigate("/aws/storage");
        console.log(nodes[0]);
      } else if (nodes[0] === 4) {
        //navigate("/gcp");
        console.log(nodes[0]);
      }
    },
  };

  return <Graph graph={graph} options={options} events={events} />;
};
