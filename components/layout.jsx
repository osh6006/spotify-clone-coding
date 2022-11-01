import Sidebar from "./sidebar";
import { useState } from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-10">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
