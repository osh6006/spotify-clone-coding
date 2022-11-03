import Link from "next/link";
import Layout from "../../components/layout";
import Playlist from "../../components/playlist";

const Index = () => {
  return (
    <Layout>
      <div className="w-full p-6 overflow-y-auto">
        <div className=" text-white font-bold text-2xl">플레이 리스트</div>
        {/* <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (

          ))}
        </div> */}
        <Link
          href="/like"
          className="flex flex-col mt-4 sm:flex-row sm:space-x-5 cursor-pointer "
        >
          <div className="flex flex-col justify-end w-full sm:w-[420px] h-[280px] bg-gradient-to-tl to-indigo-700 from-violet-400 p-5 rounded-md ">
            {/* map song titile string artist */}
            <p className="text-white">The Kid LAROI STAY</p>
            <h1 className="text-white font-bold text-3xl mb-5 mt-10">
              좋아요 표시한 곡
            </h1>
            <p className="text-white">1 좋아요 표시한 곡</p>
          </div>
          <Playlist />
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
