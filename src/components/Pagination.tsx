"use client";

import React from "react";

export const Button: React.FC<{}> = () => {
  return (
    <>
      <div className="join grid grid-cols-2">
        <button className="join-item btn btn-sm btn-outline">
          Previous page
        </button>
        <button className="join-item btn btn-sm btn-outline">Next</button>
      </div>
    </>
  );
};

export const Meta: React.FC<{}> = () => {
  return (
    <>
      <div className="flex-1 flex">
        <ul className="flex gap-x-1 items-center">
          {new Array(5).fill(0).map((_, idx) => (
            <li
              key={idx}
              className={`h-1 rounded-sm ${
                idx === 0 ? "bg-[#9fbeee] w-6" : "bg-[#feffff] w-2"
              }`}
            ></li>
          ))}
        </ul>
        <div className="ml-auto flex items-center">
          <p className="text-xs text-[#828891]">
            <span>8 </span>of<span> 40</span>
          </p>
        </div>
      </div>
    </>
  );
};
