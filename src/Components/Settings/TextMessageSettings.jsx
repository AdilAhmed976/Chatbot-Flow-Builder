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
    let flowSelectedNode = reactFlow.getNode(selectedNode.id);
    let currentNode = {
      ...flowSelectedNode,
      data: { ...flowSelectedNode.data, label: value },
    };
    let allNodes = reactFlow.getNodes();
    let allEdges = reactFlow.getEdges();

    reactFlow?.setNodes(
      allNodes.map((node) =>
        node.id === currentNode.id ? { ...currentNode } : node
      )
    );
    props?._updateFlowData({
      nodes: allNodes.map((node) =>
        node.id === currentNode.id ? { ...currentNode } : node
      ),
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
    <div className="p-4 flex flex-col gap-2">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
        Text
      </label>
      <textarea
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your thoughts here..."
      ></textarea>

      <Button text="Save" onClick={handleSave} className={"mt-4"} />
    </div>
  );
};

export default TextMessageSettings;
