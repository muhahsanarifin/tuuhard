import React from "react";

import SiderBar from "@/components/SideBar";

const Casier = () => {
  return (
    <main className="border-2 border-solid border-green-500 flex min-h-screen">
      <section className="bg-[#292c4b] py-[1.5rem] pr-[1.5rem]">
        <SiderBar
          onClass="bg-[#ffffff]"
          onClassFitur="text-[#3589e0]"
          activeBtn="casier"
        />
      </section>
      <section className="flex-1">
        <h1>Casier section</h1>
      </section>
    </main>
  );
};

export default Casier;
