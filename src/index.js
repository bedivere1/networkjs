import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from "react-force-graph";
import SpriteText from "three-spritetext";

ReactDOM.render(
  <ForceGraph3D
    graphData={{
      nodes: [
        {
          id: "เรียนไปทำไม",
          name: "name1",
          val: 20,
          color: "red"
        },
        {
          id: "เคมี",
          name: "name5",
          val: 10,
          color: "red"
        },
        {
          id: "ฟิสิกส์",
          name: "name2",
          val: 10,
          color: "red"
        },
        {
          id: "ชีวะ",
          name: "name3",
          val: 10,
          color: "red"
        },
        {
          id: "เลข",
          name: "name4",
          val: 10,
          color: "red"
        },
        {
          id: "วิศวะ",
          name: "name4",
          val: 5,
          color: "red"
        },
        {
          id: "หมอ",
          name: "name4",
          val: 5,
          color: "red"
        }
      ],
      links: [
        {
          source: "เรียนไปทำไม",
          target: "เคมี",
          val: 2
        },
        {
          source: "เรียนไปทำไม",
          target: "ฟิสิกส์",
          val: 2
        },
        {
          source: "เรียนไปทำไม",
          target: "ชีวะ",
          val: 3
        },
        {
          source: "เรียนไปทำไม",
          target: "เลข",
          val: 1
        },
        { source: "เลข", 
        target: "วิศวะ", 
        val: 1 },
        {
          source: "ฟิสิกส์",
          target: "วิศวะ",
          val: 3
        },
        {
          source: "ชีวะ",
          target: "หมอ",
          val: 1
        },
        {
          source: "เลข",
          target: "หมอ",
          val: 1
        },
        {
          source: "เคมี",
          target: "หมอ",
          val: 1
        },
        {
          source: "เลข",
          target: "วิศวะ",
          val: 1
        }
      ]
    }}
    linkWidth={1}
    linkWidth={link => link.val} linkColor={link => (link.source === 'เคมี') ? "red" : "green"}
    linkOpacity={0.3}
    nodeThreeObject={node => {
      const sprite = new SpriteText(node.id);
      sprite.color = node.color;
      sprite.textHeight = node.val;
      return sprite;
    }}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
