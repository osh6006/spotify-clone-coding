import Link from "next/link";
import { cls } from "../libs/util";

const CategoryCard = ({ color = "bg-green-800", title = "최신음악" }) => {
  return (
    <Link
      href="/"
      className={cls(
        `w-[200px] rounded-md aspect-square p-5 relative ${color} cursor-pointer overflow-hidden`
      )}
    >
      <h2 className="text-white font-bold text-xl">{title}</h2>
      <div className="absolute aspect-square bg-slate-500 w-24 h-24 bottom-0 -right-2 rotate-[23deg]"></div>
    </Link>
  );
};

export default CategoryCard;
