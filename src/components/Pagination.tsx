"use client";

import React from "react";

export const Button: React.FC<{}> = () => {
  const handlePreviousPage = () => {
    console.log("Test previous page!");
  };

  const handleNextPage = () => {
    console.log("Test next page!");
  };

  return (
    <>
      <div className="inline-flex items-center justify-center gap-3">
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary-border-c bg-pb-bg text-gray-900 rtl:rotate-180"
          onClick={handlePreviousPage}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-xs text-bf-c font-semibold">
          3<span className="mx-0.25">/</span>
          12
        </p>

        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-primary-border-c bg-nb-bg text-gray-900 rtl:rotate-180"
          onClick={handleNextPage}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
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
      </div>
    </>
  );
};
