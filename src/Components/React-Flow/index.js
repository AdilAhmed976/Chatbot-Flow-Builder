import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import ButtonEdge from "./node-edge-types/Edges/ButtonEdge";
import TextMessage from "./node-edge-types/Nodes/TextMessage";
import { TEXT_MESSAGE_NODE } from "../../Core/Strings";

const nodeTypes = {
  textmessage: TextMessage,
};

const edgeTypes = {
  button: ButtonEdge,
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      className="overview"
    >
      <MiniMap zoomable pannable />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default Flow;
