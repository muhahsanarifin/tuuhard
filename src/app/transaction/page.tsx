import React from "react";

import SiderBar from "@/components/SideBar";
import * as History from "../../components/History";
import Select from "@/components/Select";
import * as Pagination from "@/components/Pagination";

const Transaction = () => {
  return (
    <main className="flex min-h-screen">
      <section className="bg-[#292c4b] py-[1.5rem] pr-[1.5rem]">
        <SiderBar
          onClass="bg-[#ffffff]"
          onClassFitur="text-[#3589e0]"
          activeBtn="transaction"
        />
      </section>
      <section className="flex-1 bg-[#f5f6f8] border=2 border-solid border-red-500">
        <div className="flex p-4">
          <Select />
        </div>
        <div className="p-4">
          <History.Order />
        </div>
        <div className="flex gap-x-2 p-4">
          <Pagination.Meta />
          <Pagination.Button />
        </div>
      </section>
    </main>
  );
};
export default Transaction;
