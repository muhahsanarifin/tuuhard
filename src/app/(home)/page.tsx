import React from "react";

import SiderBar from "@/components/SideBar";
import Search from "@/components/Search";
import * as Pagination from "@/components/Pagination";
import * as Product from "@/components/Product";
import * as Sorter from "@/components/Sorter";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <section className="bg-sidebar-bg-color py-[1.5rem] pr-[1.5rem]">
        <SiderBar
          onClass="bg-aft-bg"
          onClassFitur="text-aft-c"
          activeBtn="home"
        />
      </section>
      <section className="flex-1">
        <div className="h-full flex">
          <div className="bg-pagination-search-product-bg flex-1 flex flex-col p-4">
            <div className="h-[8%] flex">
              <Search />
            </div>
            <div className="h-[4%] flex">
              <Pagination.Meta />
            </div>
            <div className="flex-1">
              <Product.View />
            </div>
            <div className="h-[12%] flex items-center rounded-lg bg-sorter-bg px-1">
              <div className="flex-1 flex m-1 bg-sorter-bg">
                <Sorter.SortingBtn />
                <Sorter.AddingBtn />
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-full bg-primary-cart-bg">
            <Cart />
          </div>
        </div>
      </section>
    </main>
  );
}
