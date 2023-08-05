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
      <ul className="h-full bg-navbar-bg-color rounded-r-3xl flex flex-col items-center w-28">
        {icon.sideBar.map((el, idx) => (
          <li
            className={`my-auto rotate-[-90deg] w-fit cursor-pointer flex justify-center items-center gap-x-2 p-4 rounded-lg hover:bg-aft-bg ${
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
              width={el.widh}
              height={el.height}
              hFlip={el.horizontal_flip}
              className={
                el.fitur.toLocaleLowerCase() === activeBtn
                  ? `text-afi`
                  : `text-dfi`
              }
            />
            <p
              className={`${
                el.fitur.toLocaleLowerCase() === activeBtn
                  ? onClassFitur
                  : "text-dft-c"
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
