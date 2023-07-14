import React from "react";

import SiderBar from "@/components/SideBar";
import Search from "@/components/Search";
import * as Pagination from "@/components/Pagination";
import Products from "@/components/Products";
import * as Sorter from "@/components/Sorter";

export default function Home() {
  return (
    <main className="border-2 border-solid border-green-500 flex min-h-screen">
      <section className="bg-[#292c4b] py-[1.5rem] pr-[1.5rem]">
        <SiderBar />
      </section>
      <section className="border-2 border-solid border-pink-500 flex-1">
        <div className="border-2 border-solid border-yellow-500 h-full flex">
          <div className="border-2 border-solid border-blue-500 bg-[#f5f6f8] flex-1 flex flex-col p-4">
            <div className="h-[8%] flex">
              <Search />
            </div>
            <div className="h-[4%] flex">
              <Pagination.Meta />
            </div>
            <div className="flex-1">
              <Products />
            </div>
            <div className="h-[10%] flex">
              <div className="flex-1 flex m-1 rounded-lg bg-[#ffffff]">
                <Sorter.SortingBtn />
                <Sorter.AddingBtn />
              </div>
            </div>
          </div>
          <div className="border-2 border-solid border-purple-500 basis-1/4">
            <h1>Cart section</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
