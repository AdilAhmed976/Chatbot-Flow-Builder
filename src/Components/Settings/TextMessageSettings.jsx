import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

const TextMessageSettings = ({
  reactFlow,
  selectedNode,
  setSelectedNode,
  ...props
}) => {
  const [value, setValue] = useState(selectedNode?.data?.label);

  const handleSave = () => {
    let currentNode = {
      ...selectedNode,
      data: { ...selectedNode.data, label: value },
    };
    let allNodes = reactFlow.getNodes();
    let allEdges = reactFlow.getEdges();
    reactFlow?.setNodes([...allNodes, currentNode]);
    props?._updateFlowData({
      nodes: [...allNodes, currentNode],
      edges: allEdges,
    });
  };
  const handleChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    setValue(selectedNode?.data?.label);
  }, [selectedNode?.id]);

  return (
    <div className="p-2 flex flex-col gap-2">
      <input
        className="h-full w-full p-2 rounded-lg border"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button text="Save" onClick={handleSave} />
    </div>
  );
};

export default TextMessageSettings;
