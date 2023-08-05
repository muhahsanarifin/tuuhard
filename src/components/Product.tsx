"use client";

import React from "react";
import Image from "next/image";
import * as icon from "../utils/others/icon";
import * as Button from "../components/Button";
import { useRouter, useParams } from "next/navigation";

export const View: React.FC<{}> = () => {
  const router = useRouter();
  const { edit, del } = icon.product;

  return (
    <>
      <ul className="m-1 grid grid-cols-4 gap-4">
        {new Array(12).fill(0).map((_, idx) => (
          <li
            key={idx}
            className="bg-product-view-bg pb-4 flex flex-col gap-y-1 rounded-2xl"
          >
            <div className="flex py-4 border-b-2 border-solid border-primary-border-c rounded-b-2xl relative">
              {/* Note: group/item */}
              <span
                className="group/item mx-auto"
                onClick={() => {
                  console.log("Picture test!");
                  router.push(`product/detail/${idx + 1}`)
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dgdhrpj1r/image/upload/v1684630439/tuuhard-products/pt-semangka.jpg"
                  width={500}
                  height={500}
                  alt=""
                  priority={true}
                  className="w-[64px] h-[64px] transition duration-500 group-hover/item:scale-105 group-hover/item:cursor-pointer bg-pi-bg rounded-md"
                />
              </span>
              {true && (
                <div className="flex flex-col justify-center gap-y-1 absolute right-2 top-0 bottom-0">
                  <Button.Product
                    onClass="bg-icon-bg rounded-lg p-1 transition duration-500 hover:scale-105"
                    icon={edit.icon}
                    color={edit.color}
                    width={edit.width}
                    height={edit.height}
                    setClick={() => {
                      console.log("Edit test!");
                      router.push(`product/edit/${idx + 1}`);
                    }}
                  />
                  <Button.Product
                    onClass="bg-icon-bg rounded-lg p-1 transition duration-500 hover:scale-105"
                    icon={del.icon}
                    color={del.color}
                    width={del.width}
                    height={del.height}
                    setClick={() => console.log("Delete test!")}
                  />
                </div>
              )}
            </div>
            <ul className="flex items-center px-2">
              <li className="font-semibold line-through text-bf-c">$100</li>
              <li className="mx-1 text-yellow-300">$80</li>
              <li className="ml-auto text-sm font-semibold text-bf-c">
                Semangka
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Detail: React.FC<{}> = () => {
  return (
    <>
      <h1>Product detail section</h1>
    </>
  );
};

export const Create: React.FC<{}> = () => {
  return (
    <>
      <h1>Product detail section</h1>
    </>
  );
};

export const Edit: React.FC<{}> = () => {
  const params = useParams();
  console.log("Params:", params);
  return (
    <>
      <h1>Product edit section</h1>
    </>
  );
};
