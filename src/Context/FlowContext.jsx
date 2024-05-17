import React, { createContext, useContext, useState } from "react";

const FlowContext = createContext();

export const useFlowContext = () => {
  return useContext(FlowContext);
};

const FlowProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <FlowContext.Provider value={{ selectedNode, setSelectedNode }}>
      {children}
    </FlowContext.Provider>
  );
};

export default FlowProvider;
