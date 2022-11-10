import React from "react";
import { cls } from "../libs/client/util";

const Button = ({
  onClick,
  color = "bg-white",
  textColor = "text-black",
  text,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={cls(
        `${color} ${textColor} rounded-3xl py-3 px-8 font-bold hover:scale-[1.05] cursor-pointer`
      )}
    >
      {text}
    </button>
  );
};

export default Button;
