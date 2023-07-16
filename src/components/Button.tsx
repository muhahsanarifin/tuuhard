"use client";

import React from "react";
import * as type from "../../utils/types/buttonType";

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
