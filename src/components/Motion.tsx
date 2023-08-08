"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";

type MotionProps = {
  children: any;
};

// react-motion-animate
// import { MotionAnimate } from "react-motion-animate";

// export const FadeInUp: React.FC<MotionProps> = ({ children }) => {
//   return <MotionAnimate animation="fadeInUp">{children}</MotionAnimate>;
// };

export const FadeInUp: React.FC<MotionProps> = ({ children }) => {
  const springs = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return <animated.div style={springs}>{children}</animated.div>;
};
