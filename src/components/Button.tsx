"use client";

import React from "react";
import * as type from "../utils/types/buttonType";
import { Icon } from "@iconify/react";

export const Cart: React.FC<type.CartButtonProps> = ({
  title,
  cls = "border-solid border-2 border-green-500",
}) => {
  return (
    <>
      <button className={cls}>{title}</button>
    </>
  );
};

export const Product: React.FC<type.ProductButtonProps> = ({
  onClass,
  icon,
  color,
  width,
  height,
  setClick,
}) => {
  return (
    <>
      <button className={onClass}>
        <Icon
          icon={icon}
          color={color}
          width={width}
          height={height}
          onClick={setClick}
        />
      </button>
    </>
  );
};
