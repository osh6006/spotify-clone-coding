import React from "react";
import { cls } from "../libs/client/util";

const SocialButton = ({
  onClick,
  color = "bg-white",
  textColor = "text-black",
  outline = false,
  text,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cls(
        `${color} ${textColor} w-full rounded-3xl py-3 px-16 font-bold hover:scale-[1.05] cursor-pointer tracking-widest ${
          outline ? "border border-slate-500" : ""
        }`
      )}
    >
      {text}
    </button>
  );
};

export default SocialButton;
