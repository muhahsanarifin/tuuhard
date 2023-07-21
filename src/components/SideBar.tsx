"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import * as icon from "../utils/others/icon";
import * as type from "../utils/types/sideBarTypes";

const SiderBar: React.FC<type.SideBarProps> = ({
  onClass,
  onClassFitur,
  activeBtn,
}) => {
  const router = useRouter();

  return (
    <>
      <ul className="h-full bg-[#2f80ec] rounded-r-3xl flex flex-col items-center w-28">
        {icon.sideBar.map((el, idx) => (
          <li
            className={`my-auto rotate-[-90deg] w-fit cursor-pointer flex justify-center items-center gap-x-2 p-4 rounded-lg hover:bg-[#ffffff] ${
              el.fitur.toLocaleLowerCase() === activeBtn && onClass
            }`}
            key={idx}
            onClick={() => {
              router.push(
                el.fitur === "Home" ? "/" : `/${el.fitur.toLocaleLowerCase()}`
              );
              console.log(el.fitur.toLocaleLowerCase());
            }}
          >
            <Icon
              icon={el.icon}
              color={
                el.fitur.toLocaleLowerCase() === activeBtn
                  ? el.color.active
                  : el.color.disable
              }
              width={el.widh}
              height={el.height}
              hFlip={el.horizontal_flip}
            />
            <p
              className={`${
                el.fitur.toLocaleLowerCase() === activeBtn
                  ? onClassFitur
                  : "text-[#afdaf9]"
              }`}
            >
              {el.fitur}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SiderBar;
