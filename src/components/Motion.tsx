"use client";

import React from "react";
import { MotionAnimate } from "react-motion-animate";

type MotionProps = {
  children: any;
};

export const fadeInUp: React.FC<MotionProps> = ({ children }) => {
  return <MotionAnimate animation="fadeInUp">{children}</MotionAnimate>;
};
