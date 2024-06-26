import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import TextMessage from "./node-edge-types/Nodes/TextMessage";
import ButtonEdge from "./node-edge-types/Edges/ButtonEdge";
import { stateConnected } from "../../store/redux_tools";
import { useFlowContext } from "../../Context/FlowContext";
import { v4 as uuidv4 } from "uuid";

const getId = () => `dndnode_${uuidv4()}`;

const nodeTypes = {
  textmessage: TextMessage,
};

const edgeTypes = {
  edgebutton: ButtonEdge,
};

const Flow = (props) => {
  const { flowData } = props;
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    flowData?.nodes ? flowData?.nodes : []
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    flowData?.edges ? flowData?.edges : []
  );
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { selectedNode, setSelectedNode } = useFlowContext();

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({ ...params, type: "edgebutton" }, eds));
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const onPaneClick = (event, node) => {
    if (selectedNode) setSelectedNode(null);
  };

  return (
    <div className="dndflow h-full w-full">
      {/* <ReactFlowProvider> */}
      <div className="reactflow-wrapper h-full w-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
        >
          <MiniMap
            pannable
            zoomable
            nodeColor={"#d3d3d3"}
            style={{ border: "2px solid #d3d3d3" }}
          />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      {/* </ReactFlowProvider> */}
    </div>
  );
};

export default stateConnected(Flow);
