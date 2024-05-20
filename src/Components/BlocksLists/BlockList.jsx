import React from "react";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";
import MessageIcon from "../../icons/MessageIcon";
import Button from "../Button/Button";
import { getIncomers, useReactFlow } from "reactflow";
import Alert from "../../utils/Alert";
import Error from "../../utils/Error";

const BlockList = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const reactFlow = useReactFlow();

  const handleSave = () => {
    let allNodes = reactFlow.getNodes();
    let allEdges = reactFlow.getEdges();

    // Checking for the disconnected Nodes & returning the function to not to execute the save functionality
    for (let i = 0; i < allNodes.length - 1; i++) {
      let nodeIncomers = getIncomers(allNodes?.[i], allNodes, allEdges);
      if (nodeIncomers.length === 0) {
        reactFlow?.fitBounds(
          {
            x: allNodes?.[i]?.position?.x,
            y: allNodes?.[i]?.position?.y,
            height: 100,
            width: 100,
          },
          { duration: 500, easing: "easeInOut" }
        );
        Error("Connect Node To Save Changes.");
        return;
      }
    }
    // saving the data as all the nodes are connected till this point of code 
    props?._updateFlowData({
      nodes: [...allNodes],
      edges: [...allEdges],
    });
    Alert("Saved Successfully.");
    // const targetNodeIds = new Set(allEdges.map((edge) => edge.target));
    // const unconnectedTargetNodes = allNodes.filter(
    //   (node) => !targetNodeIds.has(node.id)
    // );

    // if (unconnectedTargetNodes.length > 1) {
    //   let x =
    //     unconnectedTargetNodes?.[unconnectedTargetNodes.length - 1]?.position
    //       ?.x;

    //   let y =
    //     unconnectedTargetNodes?.[unconnectedTargetNodes.length - 1]?.position
    //       ?.y;

    //   if (x && y) {
    //     reactFlow?.fitBounds(
    //       {
    //         x,
    //         y,
    //         height: 100,
    //         width: 100,
    //       },
    //       { duration: 500, easing: "easeInOut" }
    //     );
    //   }
    //   Error("Connect Node To Save Changes.");
    // } else {
    //   props?._updateFlowData({
    //     nodes: [...allNodes],
    //     edges: [...allEdges],
    //   });
    //   Alert("Saved Successfully.");
    // }
  };

  const handleReset = () => {
    reactFlow.setNodes([]);
    reactFlow.getEdges([]);
    props?._updateFlowData({
      nodes: [],
      edges: [],
    });
    Alert("Data Reset Successfully.");
  };

  return (
    <div>
      <div className="border-b p-4 py-2">
        <p className="text-2xl mb-4">Types</p>
      </div>
      <div className="flex flex-col justify-between items-center border h-[90vh]">
        <div className="w-full h-full">
          <div className="flex flex-wrap gap-4 mb-4 mt-4 p-4 py-2 ">
            <div
              className="border border-blue-400 p-3 py-1 rounded-lg cursor-pointer bg-white flex flex-col items-center"
              onDragStart={(event) => onDragStart(event, TEXT_MESSAGE_NODE)}
              draggable
            >
              <MessageIcon />
              <text className="text-blue-400">Message</text>
            </div>
          </div>
          <div className="p-4 py-0">
            <Button text={"Save"} onClick={handleSave} />
            <Button text={"Reset"} onClick={handleReset} className={"mt-4"} />
          </div>
        </div>
        <div className="mt-4 p-4 border rounded-lg m-4 items-end">
          <p>
            Project Submitted by <b>Adil Ahmed</b>
          </p>
          <p>
            email :
            <a className="font-bold" href="mailto:adilahmedah976@gmail.com">
              {" "}
              adilahmedah976@gmail.com
            </a>
          </p>
          <p>
            contact :<a className="font-bold"> 7509144758</a>
          </p>
          <p>
            Resume:{" "}
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1UNzOI16xoD0ieay0vM-B0GEE32z27f-C/view?usp=sharing"
              target="_blank"
              className="font-bold"
            >
              Click
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
