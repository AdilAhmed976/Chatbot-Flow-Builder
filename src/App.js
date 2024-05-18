import React, { useCallback, useState } from "react";
import Flow from "./Components/React-Flow";
import Sidebar from "react-sidebar";
import BlockList from "./Components/BlocksLists/BlockList";
import { stateConnected } from "./store/redux_tools";
import { useFlowContext } from "./Context/FlowContext";
import Settings from "./Components/Settings/Settings";
import { ReactFlowProvider } from "reactflow";

const App = (props) => {
  const [sidebarOpen, onSetSidebarOpen] = useState(true);
  const { selectedNode } = useFlowContext();

  return (
    <>
      <ReactFlowProvider>
        {/* <nav class="fixed top-0 h-14 z-50 w-full bg-white"></nav> */}
        <div>
          <Sidebar
            sidebar={
              <div className="w-[300px] bg-white h-screen border-l">
                {selectedNode ? (
                  <Settings {...props} />
                ) : (
                  <BlockList {...props} />
                )}
              </div>
            }
            docked={sidebarOpen}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            shadow={false}
            styles={{
              sidebar: { backgroundColor: "white", zIndex: 100 },
            }}
            pullRight
          >
            <Flow />
          </Sidebar>
        </div>
      </ReactFlowProvider>
    </>
  );
};

export default stateConnected(App);
