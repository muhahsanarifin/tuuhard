"use client";

import Image from "next/image";
import * as icon from "../../utils/others/icon";
import { Icon } from "@iconify/react";

export const SortingBtn: React.FC<{}> = () => {
  return (
    <>
      <ul className="flex-1 flex">
        <div className="overflow-x-scroll flex gap-x-2 max-w-[945.2px] ros">
          {new Array(10).fill(0).map((_, idx) => (
            <li
              key={idx}
              className="cursor-pointer flex items-center m-1 rounded-lg gap-x-1 px-2"
            >
              <span className="flex items-center p-1 rounded-lg">
                <Image
                  src=""
                  width={500}
                  height={500}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </span>
              <p className="text-[#637ea3]">Semangka</p>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export const AddingBtn : React.FC<{}> = () => {
  return (
    <>
      <button className="ml-auto flex bg-[#639ef1] w-14 rounded-xl">
        <Icon
          icon={icon.sorter.icon}
          color={icon.sorter.color}
          width={icon.sorter.width}
          height={icon.sorter.width}
          className="m-auto"
        />
      </button>
    </>
  );
}


