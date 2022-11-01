import Link from "next/link";
import { useState } from "react";
import Button from "./button";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      {user ? (
        <nav
          onClick={() => {
            setIsPopup(!isPopup);
          }}
          className="w-full relative flex items-center justify-end bg-zinc-900 py-2 px-7"
        >
          <div className="flex items-center justify-center space-x-2 bg-black text-white py-1 px-2 rounded-3xl cursor-pointer  ">
            <div className="bg-slate-500 rounded-full">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-sm pointer-events-none">08 09</h4>
            {isPopup ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          {isPopup ? (
            <div className="absolute w-[150px] -bottom-[6rem] right-7 p-2 rounded-md bg-black text-gray-400 space-y-3 text-sm">
              <Link href="/profile">
                <div className="w-full p-2 hover:bg-gray-600 hover:text-white cursor-pointer transition-colors rounded-md">
                  프로필
                </div>
              </Link>
              <div
                onClick={() => {
                  alert("signout!");
                }}
                className="w-full p-2 hover:bg-gray-600 hover:text-white cursor-pointer rounded-md"
              >
                로그아웃
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      ) : (
        <nav className="w-full flex items-center justify-end bg-neutral-900 py-2 px-7 space-x-4 ">
          <Link
            href="/enter"
            className="text-slate-400 hover:text-white hover:font-extrabold"
          >
            가입하기
          </Link>
          <Link href="/login" className="text-slate-500">
            <Button text="로그인하기" />
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
