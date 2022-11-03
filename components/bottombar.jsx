import { useRouter } from "next/router";
import { useState } from "react";
import Button from "./button";

const Bottombar = () => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  return (
    <>
      {user ? null : (
        <div
          onClick={() => router.push("/enter")}
          className="w-full h-[66px] align-baseline fixed flex items-center justify-between px-10 py-4 bottom-0  bg-gradient-to-r from-fuchsia-700 to-blue-400 cursor-pointer"
        >
          <div className="text-white">
            <p className="text-sm">SPOTIFY 미리 듣기</p>
            <h3>좋아하는 국내 음악과 세계 최고의 플레이리스트를 들어보세요</h3>
          </div>
          <Button
            onClick={() => router.push("/enter")}
            text="Premium 가입하기"
          />
        </div>
      )}
    </>
  );
};

export default Bottombar;
