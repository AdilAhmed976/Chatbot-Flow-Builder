import React from "react";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";
import MessageIcon from "../../icons/MessageIcon";
import Button from "../Button/Button";
import { useReactFlow } from "reactflow";

const BlockList = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const reactFlow = useReactFlow();

  const handleSave = () => {
    let allNodes = reactFlow.getNodes();
    let allEdges = reactFlow.getEdges();
    props?._updateFlowData({
      nodes: [...allNodes],
      edges: [...allEdges],
    });
  };

  return (
    <div>
      <div className="border-b p-4 py-2">
        <p className="text-2xl mb-4">Types</p>
      </div>
      <div className="flex flex-wrap gap-4 mb-4 mt-4 p-4 py-2">
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
      </div>
    </div>
  );
};

export default BlockList;
