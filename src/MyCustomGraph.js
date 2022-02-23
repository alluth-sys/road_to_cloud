import React from "react";
import Graph from "react-graph-vis";

//import "./network.css";

export const MyCustomGraph = () => {
  const graph = {
    nodes: [
      {
        id: 1,
        label: "AWS",
        title: "Amazon Web Services",
        color: "#03DAC6",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 2,
        label: "AZURE",
        title: "Microsoft Azure",
        color: " #da03b3",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
      {
        id: 3,
        label: "GCP",
        title: "Google Cloud Platform",
        color: "#018786",
        shape: "circle",
        margin: 20,
        font: {
          color: "white",
        },
      },
    ],
    edges: [
      { from: 1, to: 2, color: "white", length: 300 },
      { from: 2, to: 3, color: "white", length: 300 },
      { from: 3, to: 1, color: "white", length: 300 },
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

  const events = {
    select: function (event) {
      const { nodes, edges } = event;
      console.log(nodes);
    },
  };

  return <Graph graph={graph} options={options} events={events} />;
};
