import React from "react";
import { PieGraph } from "./PieGraph";
import { activeData, langData } from "@/utils/const";
import { BarGraph } from "./BarGraph";
import WatchDataButton from "@/components/Button/WatchData";
import SignOutButton from "@/components/Button/SIgnOut";
import Image from "next/image";
import logo from "../../../public/logo.png";
import WatchFieldButton from "@/components/Button/WatchField";

const watch = () => {
  return (
    <>
      {/* <header className="fixed top-0 left-0 z-10 w-screen h-24 bg-white shadow-md flex items-center justify-between px-10">
        <Image
          width={180}
          height={80}
          alt="logo"
          src={logo}
          priority
          style={{ width: "auto" }}
        />
        <div className="flex gap-4">
          <WatchFieldButton />
          <SignOutButton />
        </div>
      </header> */}
      <div className="flex items-center justify-around">
        <div className="bg-white shadow-lg rounded-md p-10">
          <p className="font-bold">月別コントリビュート</p>
          <BarGraph />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-lg rounded-md p-10">
          <p className="font-bold">利用言語割合</p>
            <PieGraph data={langData} />
          </div>
          <div className="bg-white shadow-lg rounded-md p-10">
          <p className="font-bold">コントリビュート割合</p>
            <PieGraph data={activeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default watch;
