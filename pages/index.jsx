import { useRouter } from "next/router";
import Layout from "../components/layout";
import Playlist from "../components/playlist";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div className="w-full p-6 overflow-y-auto">
        <div className="flex justify-between ">
          <div
            onClick={() => router.push("/enter")}
            className="text-white text-2xl font-extrabold hover:underline cursor-pointer"
          >
            Spotify Playlists
          </div>
          <div
            onClick={() => router.push("/enter")}
            className="text-sm font-bold text-slate-500 hover:underline  cursor-pointer"
          >
            모두 보기
          </div>
        </div>
        <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-7 gap-4">
          {[
            1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map(i => (
            <Playlist key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
