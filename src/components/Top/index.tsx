import React from "react";
import ThreeScene from "@/components/3d/ThreeScene";
import Image from "next/image";
import logo from "../../../public/logo.png";
import SignOutButton from "../Button/SIgnOut";
import WatchDataButton from "../Button/WatchData";

export const Top = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-screen h-24 bg-white shadow-md flex items-center justify-between px-10">
        <Image width={180} height={80} alt="logo" src={logo} priority style={{ width: "auto" }} />
        <div className="flex gap-4">
          <WatchDataButton />
          <SignOutButton />
        </div>
      </header>
      <ThreeScene />
    </>
  );
};
