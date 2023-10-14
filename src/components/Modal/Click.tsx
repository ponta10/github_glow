"use client";
import React, { useState } from "react";
import { Modal } from ".";
import Image from "next/image";
import { ranks } from "@/utils/const";

interface ClickProps {
  children: React.ReactNode;
}

export const Click: React.FC<ClickProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {ranks.map((rank) => (
          <div className="flex items-center gap-8">
            <Image
              width={rank.size}
              height={60}
              alt="logo"
              src={rank.image}
              priority
            />
            <p className="text-lg font-semibold">{rank.range}<span className="text-sm font-medium ml-2">contributes</span></p>
          </div>
        ))}
      </Modal>
    </>
  );
};
