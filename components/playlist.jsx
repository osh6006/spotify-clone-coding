const Playlist = ({ title, desc }) => {
  return (
    <div className="w-52 h-[280px] p-3 flex flex-col items-center bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
      <div className="aspect-square w-[180px] bg-slate-400 rounded-md"></div>
      <h2 className="w-full mt-2 text-white font-bold">Today Top Hits</h2>
      <p className="mt-1 text-sm text-slate-500 font-bold">
        Rihanna is on the top of the Hottest 50!
      </p>
    </div>
  );
};

export default Playlist;
