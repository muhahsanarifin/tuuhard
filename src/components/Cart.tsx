"use client";

import React from "react";

import { Icon } from "@iconify/react";
import * as icon from "../../utils/others/icon";
import Image from "next/image";
import * as Button from "../components/Button";

const Cart: React.FC<{}> = () => {
  const { close, minus, plus } = icon.cart;

  return (
    <>
      <div className="flex flex-col h-full gap-y-4">
        <div className="flex p-4">
          <h1 className="text-2xl font-semibold">Cart</h1>
          <button className="bg-[#ffe9ef] ml-auto rounded-lg px-1">
            <Icon
              icon={close.icon}
              color={close.color}
              width={close.width}
              height={close.height}
            />
          </button>
        </div>
        <ul className="p-4 flex-1 flex flex-col gap-y-2">
          {new Array(3).fill(0).map((_, idx) => (
            <li
              key={idx}
              className="border-b-2 drop-shadow-lg border-solid flex py-2 rounded-lg"
            >
              <div className="basis-1/4 flex">
                <Image
                  src=""
                  width={500}
                  height={500}
                  alt=""
                  className="w-[32px] h-[32px] m-auto"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#45474c]">Fruit</p>
                <p className="font-semibold">$100</p>
              </div>
              <div className="flex items-center basis-1/4 border-2">
                <ul className="flex-1 flex justify-center items-center gap-x-1">
                  <li className="bg-[#e8f4ff] w-[24px] h-[24px] rounded-full text-center">
                    -
                  </li>
                  <li className="font-semibold text-sm text-[#45474c]">10</li>
                  <li className="bg-[#e8f4ff] w-[24px] h-[24px] rounded-full text-center">
                    +
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex">
            <p className="font-semibold">Subtotal</p>
            <p className="ml-auto font-semibold">$0</p>
          </div>
          <div className="flex">
            <p className="font-semibold">Tax</p>
            <p className="ml-auto font-semibold">$0</p>
          </div>
        </div>
        <div className="border-t-2 border-solid rounded-t-2xl bg-[#fefeff] p-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex">
              <p className="font-semibold">Total</p>
              <p className="ml-auto font-semibold">$100</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <Button.Cart
                title="CHECK OUT"
                cls="bg-[#63a0f1] text-[#e3ffff] py-3 rounded-lg"
              />
              <Button.Cart
                title="PENDING"
                cls="bg-[#63a0f1] text-[#e3ffff] py-3 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
