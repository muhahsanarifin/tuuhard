"use client";

import React from "react";
import { Icon } from "@iconify/react";

const Search: React.FC<{}> = () => {
  return (
    <>
      <span className="flex-1 flex gap-x-1 m-1 p-1 rounded-lg bg-sb-bg">
        <label htmlFor="search" className="flex items-center">
          <Icon
            icon="fluent:search-16-regular"
            color="#c1c6ca"
            width="24"
            height="24"
          />
        </label>
        <input
          type="search"
          name=""
          id="search"
          className="flex-1 text-bf-c focus:outline-none bg-sb-bg"
        />
      </span>
    </>
  );
};

export default Search;
