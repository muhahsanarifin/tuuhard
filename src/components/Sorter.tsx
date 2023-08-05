"use client";

import Image from "next/image";
import * as icon from "../utils/others/icon";
import { Icon } from "@iconify/react";

export const SortingBtn: React.FC<{}> = () => {
  return (
    <>
      <ul className="flex-1 flex max-w-[945.2px] overflow-x-scroll ros">
        {new Array(5).fill(0).map((_, idx) => (
          <li
            key={idx}
            className={`cursor-pointer m-1 p-2 rounded-lg flex flex-col gap-y-1 justify-center w-fit ${
              idx === 0 && "bg-icon-bg"
            }`}
          >
            <Image
              src="https://res.cloudinary.com/dgdhrpj1r/image/upload/v1684630439/tuuhard-products/pt-semangka.jpg"
              width={500}
              height={500}
              alt=""
              priority={true}
              className="w-[24px] h-[24px] rounded-md"
            />
            <p className="text-tis-c text-xs font-semibold">Semangka</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const AddingBtn: React.FC<{}> = () => {
  return (
    <>
      <button className="ml-auto flex bg-btn-bg w-14 rounded-xl transition duration-500 hover:scale-105">
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
};
