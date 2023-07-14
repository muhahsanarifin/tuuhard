"use client";

import React from "react";
import Image from "next/image";

const Products: React.FC<{}> = () => {
  return (
    <>
      <ul className="m-1 grid grid-cols-4 gap-4">
        {new Array(12).fill(0).map((_, idx) => (
          <li
            key={idx}
            className="bg-[#ffffff] pb-4 flex flex-col gap-y-1 rounded-2xl"
          >
            <div className="border-b-2 border-solid flex py-4 rounded-b-2xl drop-shadow-lg">
              <Image
                src=""
                width={500}
                height={500}
                alt=""
                className="w-[64px] h-[64px] mx-auto"
              />
            </div>
            <div className="mx-auto">
              <p className="text-[#333942]">
                Product
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
