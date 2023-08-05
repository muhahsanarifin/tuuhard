"use client";

import React from "react";

import { Icon } from "@iconify/react";
import * as icon from "../utils/others/icon";
import Image from "next/image";
import * as Button from "../components/Button";

const Cart: React.FC<{}> = () => {
  const { close, minus, plus } = icon.cart;

  return (
    <>
      <div className="flex flex-col h-full gap-y-4">
        <div className="flex p-4">
          <h1 className="text-2xl font-semibold text-bf-c">Cart</h1>
          <button className="bg-secondary-cart-bg ml-auto rounded-lg px-1 transition duration-500 hover:scale-105">
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
              className="border-b-2 bg-pic-bg border-solid border-primary-border-c flex p-2 rounded-lg"
            >
              <div className="flex">
                <Image
                  src="https://res.cloudinary.com/dgdhrpj1r/image/upload/v1684630439/tuuhard-products/pt-semangka.jpg"
                  width={500}
                  height={500}
                  alt=""
                  priority={true}
                  className="w-[32px] h-[32px] m-auto rounded-md"
                />
              </div>
              <div className="flex-1 mx-2">
                <p className="text-sm text-rf-c">Fruit</p>
                <p className="font-semibold text-bf-c">$100</p>
              </div>
              <div className="flex items-center basis-1/4">
                <ul className="flex-1 flex justify-center items-center gap-x-1">
                  <li className="bg-icon-bg w-[24px] h-[24px] rounded-full text-center">
                    -
                  </li>
                  <li className="font-semibold text-sm text-bf-c">10</li>
                  <li className="bg-icon-bg w-[24px] h-[24px] rounded-full text-center">
                    +
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex">
            <p className="font-semibold text-bf-c">Subtotal</p>
            <p className="ml-auto font-semibold text-bf-c">$0</p>
          </div>
          <div className="flex">
            <p className="font-semibold text-bf-c">Tax</p>
            <p className="ml-auto font-semibold text-bf-c">$0</p>
          </div>
        </div>
        <div className="border-t-2 border-solid border-primary-border-c rounded-t-2xl bg-tcp-bg p-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex">
              <p className="font-semibold text-bf-c">Total</p>
              <p className="ml-auto font-semibold text-bf-c">$100</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <Button.Cart
                title="CHECK OUT"
                cls="bg-btn-bg text-bc-c py-3 rounded-lg transition duration-500 hover:scale-105"
              />
              <Button.Cart
                title="PENDING"
                cls="bg-btn-bg text-bc-c py-3 rounded-lg transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
