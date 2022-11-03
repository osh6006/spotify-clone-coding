import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { cls } from "../libs/util";

const Sidebar = () => {
  const router = useRouter();
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(400);

  const startResizing = React.useCallback(mouseDownEvent => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    mouseMoveEvent => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <aside
      ref={sidebarRef}
      style={{ width: sidebarWidth }}
      onMouseDown={e => e.preventDefault()}
      className="flex sticky h-screen top-0  max-w-[400px] min-w-[200px] bg-black"
    >
      <div className="flex flex-col p-6 gap-4">
        <Link href="/">
          <img className="min-w-[30%] max-w-[40%]" alt="logo" src="/logo.png" />
        </Link>
        <Link
          href="/"
          className={cls(
            "mt-6 flex space-x-3 items-center hover:text-white transition-colors",
            router.pathname === "/" ? "text-white" : "text-gray-400"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="text-sm">홈</span>
        </Link>
        <Link
          href="/search"
          className={cls(
            "flex space-x-3 items-center hover:text-white transition-colors ",
            router.pathname === "/search" ? "text-white" : "text-gray-400"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <span className="text-sm">검색하기</span>
        </Link>
        <Link
          href="/lib"
          className={cls(
            "flex space-x-3 items-center hover:text-white transition-colors ",
            router.pathname === "/lib" ? "text-white" : "text-gray-400"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span className="text-sm">내 라이브러리</span>
        </Link>
        <button className="mt-5 flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-slate-300 text-gray-900 rounded-[4px] p-[3px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>

          <span className="text-sm ">플레이리스트 만들기</span>
        </button>
        <Link
          href="/like"
          className={cls(
            "flex space-x-3 items-center hover:text-white transition-colors",
            router.pathname === "/like" ? "text-white" : "text-gray-400"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 bg-gradient-to-tl to-violet-700 from-blue-400 p-1 rounded-[3px] text-gray-300"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>

          <span className="text-sm">좋아요 표시한 곡</span>
        </Link>
      </div>
      <div
        className="w-[10px] h-full cursor-w-resize resize-x hover:w-[3px] hover:bg-slate-500"
        onMouseDown={startResizing}
      />
      {/*my play list link  */}
    </aside>
  );
};

export default Sidebar;
