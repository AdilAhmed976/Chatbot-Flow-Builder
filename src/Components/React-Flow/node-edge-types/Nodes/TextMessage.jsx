import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import MessageIcon from "../../../../icons/MessageIcon";

const handleStyle = { left: 10 };

function TextMessage({ data, isConnectable }) {
  return (
    <div>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <div className="min-w-[200px] max-w-[400px] border border-gray-900 rounded-lg h-auto bg-white">
        <div className="bg-green-200 w-full rounded-tl-lg rounded-tr-lg p-1 py-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MessageIcon className="text-gray-600" size={14} />
            <text className="font-bold text-md">Send Message</text>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
              alt=""
              srcset=""
              className="h-4 w-4"
            />
          </div>
        </div>
        <div className="p-2">
          <label htmlFor="text">{data.label}</label>
        </div>
      </div>
    </div>
  );
}

export default TextMessage;
