import React from "react";
import { useFlowContext } from "../../Context/FlowContext";

const Settings = (props) => {
  const { selectedNode, setSelectedNode } = useFlowContext();
  return (
    <div className="h-full">
      <div className="p-2 px-4 flex items-center gap-2">
        <button
          onClick={() => {
            setSelectedNode(null);
          }}
          className="border rounded-lg p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height={14}
            width={14}
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
        </button>
        <p className="text-2xl">{selectedNode?.type}</p>
      </div>
      <div className="flex flex-wrap p-4 gap-4"></div>
    </div>
  );
};

export default Settings;
