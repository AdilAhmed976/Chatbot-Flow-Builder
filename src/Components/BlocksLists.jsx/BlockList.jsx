import React from "react";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";
import MessageIcon from "../../icons/MessageIcon";

const BlockList = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="h-full">
      <div className="p-2 px-4">
        <p className="text-2xl">Types</p>
      </div>
      <div className="flex flex-wrap p-4 gap-4">
        <div
          className="border border-blue-400 p-3 py-1 rounded-lg cursor-pointer bg-white flex flex-col items-center"
          onDragStart={(event) => onDragStart(event, TEXT_MESSAGE_NODE)}
          draggable
        >
          <MessageIcon />
          <text className="text-blue-400">Message</text>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
