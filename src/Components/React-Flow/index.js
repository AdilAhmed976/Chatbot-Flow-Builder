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
import TextNode from "./node-edge-types/Nodes/TextNode";
import ButtonEdge from "./node-edge-types/Edges/ButtonEdge";
import TextInputNode from "./node-edge-types/Nodes/TextInputNode";

const nodeTypes = {
  textinput: TextInputNode,
  textnode: TextNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "annotation-1",
      type: "textinput",
      draggable: true,
      selectable: true,
      editable: true,
      data: {
        level: 1,
        label:
          "Built-in node and edge types. Draggable, deletable and connectable!",
        arrowStyle: {
          right: 0,
          bottom: 0,
          transform: "translate(-30px,10px) rotate(-80deg)",
        },
      },
      position: { x: -80, y: -30 },
    },
    {
      id: "2-3",
      type: "textnode",
      draggable: true,
      selectable: true,
      data: {
        level: 1,
        label:
          "Built-in node and edge types. Draggable, deletable and connectable!",
        arrowStyle: {
          right: 0,
          bottom: 0,
          transform: "translate(-30px,10px) rotate(-80deg)",
        },
      },
      position: { x: -80, y: -30 },
    },
  ]);
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
