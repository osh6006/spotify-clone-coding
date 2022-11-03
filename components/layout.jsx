import Sidebar from "./sidebar";
import { useState } from "react";
import Navbar from "./navbar";
import Bottombar from "./bottombar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex min-w-[748px]">
      <Sidebar />
      <div
        className={`w-full  ${
          router.pathname === "/like"
            ? " bg-gradient-to-b from-indigo-900 via-zinc-900 to-zinc-900"
            : "bg-zinc-900"
        }`}
      >
        <Navbar />
        {children}
      </div>
      <Bottombar />
    </div>
  );
};

export default Layout;
