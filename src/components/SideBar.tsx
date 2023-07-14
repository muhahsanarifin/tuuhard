"use client";

import { Icon } from "@iconify/react";
import * as icon from "../../utils/others/icon";

const SiderBar: React.FC<{}> = () => {

  return (
    <>
      <ul className="h-full bg-[#2f80ec] rounded-r-3xl flex flex-col items-center w-28">
        {icon.sideBar.map((el, idx) => (
          <li
            className={`my-auto rotate-[-90deg] w-fit cursor-pointer flex justify-center items-center gap-x-2 p-4 rounded-lg hover:bg-[#ffffff] ${
              idx === 0 && "bg-[#ffffff]"
            }`}
            key={idx}
          >
            <Icon
              icon={el.icon}
              color={el.color.disable}
              width={el.widh}
              height={el.height}
              hFlip={el.horizontal_flip}
            />
            <p className="text-[#afdaf9]">{el.fitur}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SiderBar;
