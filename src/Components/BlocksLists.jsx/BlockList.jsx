import React from "react";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";
import MessageIcon from "../../icons/MessageIcon";

const BlockList = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex flex-wrap p-4 gap-4">
      <div
        className="border border-blue-400 p-4 rounded-lg cursor-pointer bg-white flex flex-col items-center"
        onDragStart={(event) => onDragStart(event, TEXT_MESSAGE_NODE)}
        draggable
      >
        <MessageIcon />
        <text className="text-blue-400">Message</text>
      </div>
    </div>
  );
};

export default BlockList;
