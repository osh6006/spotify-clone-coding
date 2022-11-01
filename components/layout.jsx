import Sidebar from "./sidebar";
import { useState } from "react";
import Navbar from "./navbar";
import Bottombar from "./bottombar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-zinc-800">
        <Navbar />
        {children}
      </div>
      <Bottombar />
    </div>
  );
};

export default Layout;
