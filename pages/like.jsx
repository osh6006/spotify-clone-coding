import { useState } from "react";
import Layout from "../components/layout";

const Like = () => {
  const [user, setUser] = useState(false);
  return (
    <Layout>
      <div className="w-full p-6 overflow-y-auto">
        <div className="flex space-x-7 items-end py-6 shadow-2xl">
          <div className="w-[235px] h-[235px] min-w-[200px] aspect-square bg-gradient-to-br from-indigo-800 to-slate-400 flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-20"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <div className="text-white">
            <p className="font-bold text-xs">플레이리스트</p>
            <h1 className="text-8xl font-extrabold my-9">좋아요 표시한 곡</h1>
            <div>
              <span className="after:content-['•'] after:my-0 after:mx-1 after:text-white font-bold text-xs">
                id
              </span>
              <span className="font-bold text-xs">2곡</span>
            </div>
          </div>
        </div>
        <div>
          <button className="mt-6 w-14 h-14 bg-green-500 flex items-center justify-center rounded-full hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="mt-8 grid grid-cols-[50px_1fr_0.5fr_0.5fr_50px_50px] gap-2 border-b border-blue-600 p-3 text-slate-300 text-sm ">
            <div>#</div>
            <div>제목</div>
            <div>앨범</div>
            <div>추가된 날짜</div>
            <div></div>
            <div>
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-[50px_1fr_0.5fr_0.5fr_50px_50px] gap-2 p-3 text-slate-300 text-sm items-center justify-center hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <div>1</div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-500"></div>
              <div>Baby</div>
            </div>
            <div>New jeans</div>
            <div>1일 전</div>
            <button className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
            <div>2:32</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Like;
