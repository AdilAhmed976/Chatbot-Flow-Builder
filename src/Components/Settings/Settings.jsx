import React from "react";
import { useFlowContext } from "../../Context/FlowContext";
import { useReactFlow } from "reactflow";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";
import TextMessageSettings from "./TextMessageSettings";

const Settings = (props) => {
  const { selectedNode, setSelectedNode } = useFlowContext();
  const reactFlow = useReactFlow();

  return (
    <div className="h-full">
      <div className="p-3 px-4 flex items-center gap-2  border-b-2 border-b-gray-200">
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
      <div className="h-[91%]">
        {selectedNode.type === TEXT_MESSAGE_NODE ? (
          <TextMessageSettings
            reactFlow={reactFlow}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
            {...props}
          />
        ) : (
          <>Node not Support in settings</>
        )}
      </div>
    </div>
  );
};

export default Settings;
