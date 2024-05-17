import React from "react";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";

const BlockList = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex flex-wrap p-4 gap-4">
      <div
        className="border p-2 rounded-lg cursor-pointer bg-white"
        onDragStart={(event) => onDragStart(event, TEXT_MESSAGE_NODE)}
        draggable
      >
        Text Message
      </div>
      {/* <div
        className="border p-2 rounded-lg cursor-pointer"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="border p-2 rounded-lg cursor-pointer"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div> */}
    </div>
  );
};

export default BlockList;
