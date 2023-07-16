import React from "react";

import SiderBar from "@/components/SideBar";
import Search from "@/components/Search";
import * as Pagination from "@/components/Pagination";
import Products from "@/components/Products";
import * as Sorter from "@/components/Sorter";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <section className="bg-[#292c4b] py-[1.5rem] pr-[1.5rem]">
        <SiderBar />
      </section>
      <section className="flex-1">
        <div className="h-full flex">
          <div className="bg-[#f5f6f8] flex-1 flex flex-col p-4">
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
          <div className="basis-1/4 h-full">
            <Cart/>
          </div>
        </div>
      </section>
    </main>
  );
}
