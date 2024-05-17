import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function TextMessage({ data, isConnectable }) {
  return (
    <div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="max-w-60 border border-gray-900 rounded-lg p-2">
        <label htmlFor="text">Text: {data.label}</label>
      </div>
    </div>
  );
}

export default TextMessage;
