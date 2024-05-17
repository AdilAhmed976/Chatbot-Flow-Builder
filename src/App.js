import React, { useCallback, useState } from "react";
import Flow from "./Components/React-Flow";
import Sidebar from "react-sidebar";
import BlockList from "./Components/BlocksLists.jsx/BlockList";

const App = () => {
  const [sidebarOpen, onSetSidebarOpen] = useState(true);
  return (
    <>
      <nav class="fixed top-0 h-14 z-50 w-full bg-white border-b border-gray-200"></nav>
      <div>
        <Sidebar
          sidebar={
            <div className="w-[300px] bg-[#FAFAFA] h-screen">
              <BlockList />
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
    </>
  );
};

export default App;
